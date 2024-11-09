import { render, screen } from '@testing-library/react';
import GridItem from '../grid-item.component';

describe('UI/Grid Item', () => {
  it('renders a default grid item', () => {
    render(<GridItem>Grid Item</GridItem>);

    const gridItem = screen.getByText('Grid Item');
    expect(gridItem).toBeInTheDocument();
  });

  it('renders a grid item with provided tagName', () => {
    render(<GridItem as='li'>Grid Item</GridItem>);

    const gridItem = screen.getByText('Grid Item');

    expect(gridItem.tagName).toEqual('LI');
    expect(gridItem).toBeInTheDocument();
  });
});
