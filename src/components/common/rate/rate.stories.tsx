import type { Meta, StoryObj } from '@storybook/react';
import { default as RateComp } from './rate.component';

const meta = {
  title: 'Components/Common/Rate',
  component: RateComp,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 5, step: 0.1 },
    },
    max: {
      control: { type: 'number', min: 1, max: 10 },
    },
    readonly: {
      control: 'boolean',
    },
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof RateComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Readonly: Story = {
  args: {
    value: 3.5,
  },
};

export const Interactive: Story = {
  args: {
    value: 0,
    readonly: false,
  },
};
