import { render, screen } from '@testing-library/react';
import ProductCard from './product-card.component';

const product = {
  id: 1,
  title: 'Essence Mascara Lash Princess',
  description:
    'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
  category: 'beauty',
  price: 9.99,
  discountPercentage: 7.17,
  rating: 4.94,
  stock: 5,
  tags: ['beauty', 'mascara'],
  brand: 'Essence',
  sku: 'RCH45Q1A',
  weight: 2,
  dimensions: {
    width: 23.17,
    height: 14.43,
    depth: 28.01,
  },
  warrantyInformation: '1 month warranty',
  shippingInformation: 'Ships in 1 month',
  availabilityStatus: 'Low Stock',
  reviews: [
    {
      rating: 2,
      comment: 'Very unhappy with my purchase!',
      date: '2024-05-23T08:56:21.618Z',
      reviewerName: 'John Doe',
      reviewerEmail: 'john.doe@x.dummyjson.com',
    },
    {
      rating: 2,
      comment: 'Not as described!',
      date: '2024-05-23T08:56:21.618Z',
      reviewerName: 'Nolan Gonzalez',
      reviewerEmail: 'nolan.gonzalez@x.dummyjson.com',
    },
    {
      rating: 5,
      comment: 'Very satisfied!',
      date: '2024-05-23T08:56:21.618Z',
      reviewerName: 'Scarlett Wright',
      reviewerEmail: 'scarlett.wright@x.dummyjson.com',
    },
  ],
  returnPolicy: '30 days return policy',
  minimumOrderQuantity: 24,
  meta: {
    createdAt: '2024-05-23T08:56:21.618Z',
    updatedAt: '2024-05-23T08:56:21.618Z',
    barcode: '9164035109868',
    qrCode: 'https://assets.dummyjson.com/public/qr-code.png',
  },
  images: [
    'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
  ],
  thumbnail:
    'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
};

jest.mock('next/link', () => {
  const MockNextLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => {
    return <a href={href}>{children}</a>;
  };
  return MockNextLink;
});

describe('UI/ProductCard', () => {
  it('renders product card with title, cover image, description, rating, price metadata', () => {
    render(<ProductCard product={product} />);

    const title = screen.getByText(product.title);
    const description = screen.getByText(product.description);
    const rating = screen.getByText(product.rating);
    const price = screen.getByText(product.price, { exact: false });
    const image = screen.getByRole('img');
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(image).toHaveAttribute('src', product.thumbnail);
    expect(image).toHaveAttribute('alt', product.title);
  });

  it('should renders href correctly', () => {
    render(<ProductCard product={product} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/products/${product.id}`);
  });
});
