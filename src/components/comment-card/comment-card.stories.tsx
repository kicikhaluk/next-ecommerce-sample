import type { Meta, StoryObj } from '@storybook/react';

import { default as CommentCardComp } from './comment-card.component';

const review = {
  rating: 2,
  comment: 'Very unhappy with my purchase!',
  date: '2024-05-23T08:56:21.618Z',
  reviewerName: 'John Doe',
  reviewerEmail: 'john.doe@x.dummyjson.com',
};

const meta = {
  title: 'Components/CommentCard',
  component: CommentCardComp,
  tags: ['autodocs'],
  args: {
    review,
  },
} satisfies Meta<typeof CommentCardComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
