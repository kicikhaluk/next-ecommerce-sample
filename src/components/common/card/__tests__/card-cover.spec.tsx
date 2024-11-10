import { render, screen } from '@testing-library/react';
import CardCover from '../card-cover.component';

describe('UI/CardCover', () => {
  it('renders a card cover image', () => {
    const src = 'https://via.placeholder.com/150';
    const alt = 'placeholder';
    render(<CardCover src={src} alt={alt} />);

    const cardMeta = screen.getByRole('img');

    expect(cardMeta).toHaveAttribute('src', src);
    expect(cardMeta).toHaveAttribute('alt', alt);
    expect(cardMeta).toBeInTheDocument();
  });
});
