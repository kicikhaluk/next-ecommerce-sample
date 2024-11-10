import { render, screen } from '@testing-library/react';
import CardMeta from '../card-meta.component';

describe('UI/CardMeta', () => {
  it('renders a card meta', () => {
    render(<CardMeta>Children</CardMeta>);

    const cardMeta = screen.getByText(/Children/i);

    expect(cardMeta).toHaveTextContent('Children');
    expect(cardMeta).toBeInTheDocument();
  });
});
