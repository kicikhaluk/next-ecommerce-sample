import { render, screen } from '@testing-library/react';
import Avatar from './avatar.component';

describe('UI/Avatar', () => {
  it('renders a avatar with provived source and description', () => {
    const src = 'https://avatar.iran.liara.run/public/44';
    const alt = 'Describes user avatar';
    render(<Avatar src={src} alt={alt} />);

    const avatar = screen.getByRole('img');

    expect(avatar).toHaveAttribute('src', src);
    expect(avatar).toHaveAttribute('alt', alt);
    expect(avatar).toBeInTheDocument();
  });

  it('should assign "Avatar" as a alt value if its not provided', () => {
    const src = 'https://avatar.iran.liara.run/public/44';

    render(<Avatar src={src} />);

    const avatar = screen.getByRole('img');

    expect(avatar).toHaveAttribute('src', src);
    expect(avatar).toHaveAttribute('alt', 'Avatar');
    expect(avatar).toBeInTheDocument();
  });
});
