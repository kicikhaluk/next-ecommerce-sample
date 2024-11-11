'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { USERS } from '@/constants/users';
import { generateToken, verifyToken } from '@/lib/auth';

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export async function login(_prevState: any, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const user = USERS.find((u) => u.email === email && u.password === password);

  if (user) {
    const token = generateToken(user);
    cookies().set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600,
      path: '/',
    });
    redirect('/products');
  } else {
    return { error: 'Invalid credentials' };
  }
}

export async function logout() {
  cookies().set('token', '', { expires: new Date(0) });
  redirect('/');
}

export async function submitReview(
  productId: number,
  rating: number,
  comment: string
) {
  const token = cookies().get('token')?.value;
  if (!token) {
    redirect('/');
  }
  try {
    const { id, email } = verifyToken(token) as { id: number; email: string };

    /* Dont have a DB so couldnt inserted somehow. I revalidate app with routes.refresh on called function. DummyJSON also doesnt have a endpoint for that.*/
    const product = {
      id: productId,
      rating: 0,
      reviews: [
        {
          rating,
          comment,
          date: new Date().toUTCString(),
          reviewerName: USERS.find((u) => u.id === id)?.name ?? 'USER',
          reviewerEmail: email,
        },
      ],
    };

    const ratesSum = product.reviews.reduce((acc, sum) => acc + sum.rating, 0);

    product.rating = Number((ratesSum / product.reviews.length).toFixed(1));

    return { reviews: product.reviews };
  } catch (err) {
    console.log(err);
  }
}
