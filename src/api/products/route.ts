import { products } from '@/constants/product';

export async function GET() {
  return Response.json({ products });
}
