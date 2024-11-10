import type { Meta, StoryObj } from '@storybook/react';

import Card, { default as CardComp } from './card.component';

import { Title, Text } from '../typography';

const meta = {
  title: 'Components/Common/Card',
  component: CardComp,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CardComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <Card.Meta>
        <Title>Card Title</Title>
        <Text>Card Text</Text>
      </Card.Meta>
    ),
  },
};

export const WithCover: Story = {
  args: {
    children: (
      <>
        <Card.Cover src='https://picsum.photos/200' alt='placeholder image' />
        <Card.Meta>
          <Title>Card Title</Title>
          <Text>Card Text</Text>
        </Card.Meta>
      </>
    ),
  },
};
