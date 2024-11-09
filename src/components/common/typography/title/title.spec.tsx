import { render, screen } from '@testing-library/react';
import Title from './title.component';

describe('Typography/Title', () => {
  it('renders a default title with heading level 3', () => {
    render(<Title>Title Level 3</Title>);

    const heading = screen.getByRole('heading', { level: 3 });

    expect(heading).toHaveTextContent('Title Level 3');
    expect(heading).toBeInTheDocument();
  });

  it('renders a title with provided heading level', () => {
    render(<Title as='h2'>Title Level 2</Title>);

    const heading = screen.getByRole('heading', { level: 2 });

    expect(heading).toHaveTextContent('Title Level 2');
    expect(heading).toBeInTheDocument();
  });
});
