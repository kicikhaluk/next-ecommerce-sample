import type { Meta, StoryObj } from '@storybook/react';

import { default as VSpacerComp } from './vspacer.component';
const meta = {
  title: 'Components/Common/VSpacer',
  component: VSpacerComp,
  tags: ['autodocs'],
  args: {
    as: 'div',
    spacing: 1,
    children: 'spacing props increase Margin Bottom style',
  },
} satisfies Meta<typeof VSpacerComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
