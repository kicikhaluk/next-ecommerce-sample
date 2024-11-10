import { render, screen } from '@testing-library/react';
import Card from '../card.component';

describe('UI/Card', () => {
  it('renders a default card with children', () => {
    render(<Card>Children</Card>);

    const card = screen.getByText(/Children/i);

    expect(card).toHaveTextContent('Children');
    expect(card).toBeInTheDocument();
  });
});
