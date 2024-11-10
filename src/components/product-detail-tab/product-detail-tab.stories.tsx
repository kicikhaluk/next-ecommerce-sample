import type { Meta, StoryObj } from '@storybook/react';

import { default as ProductDetailTabComp } from './product-detail-tab.component';

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

const meta = {
  title: 'Components/Product Detail Tab',
  component: ProductDetailTabComp,
  tags: ['autodocs'],
  args: {
    product,
  },
} satisfies Meta<typeof ProductDetailTabComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};