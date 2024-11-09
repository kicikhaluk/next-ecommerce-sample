import type { Meta, StoryObj } from '@storybook/react';

import { default as Typography } from './text.component';

const meta = {
  title: 'Components/Common/Typography/Text',
  component: Typography,
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Text Sample',
  },
};
