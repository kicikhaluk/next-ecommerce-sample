import type { Meta, StoryObj } from '@storybook/react';

import { default as GridComp } from './grid.component';
import GridItem from './grid-item.component';

const meta = {
  title: 'Components/Common/Grid',
  component: GridComp,
  tags: ['autodocs'],
  args: {
    as: 'div',
    gap: 1,
    column: 1,
    children: [
      <GridItem key={1}>Grid Item 1</GridItem>,
      <GridItem key={2}>Grid Item 2</GridItem>,
      <GridItem key={3}>Grid Item 3</GridItem>,
    ],
  },
} satisfies Meta<typeof GridComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
