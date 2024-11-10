import { Meta, StoryObj } from '@storybook/react';
import Tab from './tab.component';

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  render: () => (
    <Tab defaultActiveTab='tab1'>
      <Tab.List>
        <Tab.Trigger id='tab1' title='Tab1' />
        <Tab.Trigger id='tab2' title='Tab2' />
        <Tab.Trigger id='tab3' title='Tab3' />
      </Tab.List>
      <Tab.Content>
        <Tab.Pane id='tab1'>
          <h2>Content 1</h2>
          <p>This is the content for Tab 1</p>
        </Tab.Pane>
        <Tab.Pane id='tab2'>
          <h2>Content 2</h2>
          <p>This is the content for Tab 2</p>
        </Tab.Pane>
        <Tab.Pane id='tab3'>
          <h2>Content 3</h2>
          <p>This is the content for Tab 3</p>
        </Tab.Pane>
      </Tab.Content>
    </Tab>
  ),
};
