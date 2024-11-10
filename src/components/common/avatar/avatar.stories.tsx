import type { Meta, StoryObj } from '@storybook/react';
import { default as AvatarComp } from './avatar.component';

const meta = {
  title: 'Components/Common/Avatar',
  component: AvatarComp,
  tags: ['autodocs'],
  args: {
    src: 'https://avatar.iran.liara.run/public/44',
    alt: 'Avatar',
  },
} satisfies Meta<typeof AvatarComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
