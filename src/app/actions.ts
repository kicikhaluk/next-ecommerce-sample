'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { USERS } from '@/constants/users';
import { generateToken } from '@/lib/auth';

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
