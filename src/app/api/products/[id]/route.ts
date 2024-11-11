import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const token = request.headers.get('Authorization')?.split(' ')[1];

  if (!token || !verifyToken(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const response = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = await response.json();

  if (!product) {
    return NextResponse.json({ error: 'Element not found' }, { status: 404 });
  }

  return NextResponse.json({ product });
}
