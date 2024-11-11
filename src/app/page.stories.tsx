import type { Meta, StoryObj } from '@storybook/react';
import { Mock } from '@storybook/test';
import LoginPage from './page';
import { useFormState } from 'react-dom';

// Mock the useFormState hook
jest.mock('react-dom', () => ({
  useFormState: jest.fn(),
}));

const meta: Meta<typeof LoginPage> = {
  title: 'Pages/Login',
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof LoginPage>;

export const Default: Story = {
  decorators: [
    (Story) => {
      (useFormState as Mock).mockImplementation(() => [null, () => {}]);
      return <Story />;
    },
  ],
};

export const WithError: Story = {
  decorators: [
    (Story) => {
      (useFormState as Mock).mockImplementation(() => [
        { error: 'Invalid credentials' },
        () => {},
      ]);
      return <Story />;
    },
  ],
};

export const Loading: Story = {
  decorators: [
    (Story) => {
      (useFormState as Mock).mockImplementation(() => [null, () => {}]);
      return (
        <div>
          <Story />
        </div>
      );
    },
  ],
};
