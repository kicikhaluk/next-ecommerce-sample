import { Meta, StoryObj } from '@storybook/react';
import Page from './page';

const meta: Meta<typeof Page> = {
  title: 'Pages/Products',
  component: Page,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};
