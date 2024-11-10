import { render, screen, fireEvent } from '@testing-library/react';
import Tab from './tab.component';

describe('UI/Tab Component', () => {
  const renderComponent = () => {
    return render(
      <Tab defaultActiveTab='tab1'>
        <Tab.List>
          <Tab.Trigger id='tab1' title='Tab 1' />
          <Tab.Trigger id='tab2' title='Tab 2' />
        </Tab.List>
        <Tab.Content>
          <Tab.Pane id='tab1'>Content 1</Tab.Pane>
          <Tab.Pane id='tab2'>Content 2</Tab.Pane>
        </Tab.Content>
      </Tab>
    );
  };

  it('renders all tab triggers', () => {
    renderComponent();
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument();
  });

  it('renders the default active tab content', () => {
    renderComponent();
    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.queryByText('Content 2')).not.toBeVisible();
  });

  it('should switches tab content when clicking on a tab trigger', () => {
    renderComponent();

    fireEvent.click(screen.getByRole('tab', { name: 'Tab 2' }));

    expect(screen.queryByText('Content 1')).not.toBeVisible();
    expect(screen.getByText('Content 2')).toBeVisible();
  });
});
