import { Meta, StoryObj } from '@storybook/react';
import { default as CarouselComp } from './carousel.component';

const meta: Meta<typeof CarouselComp> = {
  title: 'Components/Common/Carousel',
  component: CarouselComp,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CarouselComp>;

const images = [
  {
    src: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
    alt: 'Placeholder 1',
  },
  {
    src: 'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png',
    alt: 'Placeholder 2',
  },
  {
    src: 'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png',
    alt: 'Placeholder 3',
  },
];

export const Default: Story = {
  args: {
    images: images,
  },
};
