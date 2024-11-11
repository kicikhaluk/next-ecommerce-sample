import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTS } from '@/constants/product';
import { verifyToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const token = request.headers.get('Authorization')?.split(' ')[1];

  if (!token || !verifyToken(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({ products: PRODUCTS });
}
