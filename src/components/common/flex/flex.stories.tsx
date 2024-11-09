import type { Meta, StoryObj } from '@storybook/react';

import { default as FlexComp } from './flex.component';
import { Text } from '@/components';

const meta = {
  title: 'Components/Common/Flex',
  component: FlexComp,
  tags: ['autodocs'],
  args: {
    as: 'div',
    direction: 'column',
    gap: 0,
    alignItems: 'strech',
    justifyContent: 'flex-start',
    children: [
      <Text key={1}>Flex Item 1</Text>,
      <Text key={2}>Flex Item 2</Text>,
      <Text key={3}>Flex Item 3</Text>,
    ],
  },
} satisfies Meta<typeof FlexComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
