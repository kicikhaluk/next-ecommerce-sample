import { render, screen } from '@testing-library/react';
import Grid from '../grid.component';

describe('UI/Grid', () => {
  it('renders a default grid wrapper', () => {
    render(<Grid>Grid Wrapper</Grid>);

    const grid = screen.getByText('Grid Wrapper');
    expect(grid).toBeInTheDocument();
  });

  it('renders a grid wrapper with provided tagName', () => {
    render(<Grid as='article'>Grid Wrapper</Grid>);

    const grid = screen.getByText('Grid Wrapper');

    expect(grid.tagName).toEqual('ARTICLE');
    expect(grid).toBeInTheDocument();
  });
});
