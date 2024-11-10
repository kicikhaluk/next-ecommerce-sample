import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Rate from './rate.component';

const starsByFillState = (container: HTMLElement, filled: boolean) => {
  return Array.from(container.querySelectorAll('.rate_star')).filter((star) =>
    filled
      ? star.classList.contains('rate_star_full')
      : star.classList.contains('rate_star_empty')
  );
};

describe('UI/Readonly Rate', () => {
  it('renders the correct number of full stars', () => {
    const { container } = render(<Rate value={3} />);

    const fullStars = starsByFillState(container, true);

    expect(fullStars).toHaveLength(3);
  });

  it('renders a half star correctly', () => {
    const { container } = render(<Rate value={3.5} />);

    const halfStar = container.querySelector('.rate_star_half');

    expect(halfStar).toBeInTheDocument();
  });

  it('should rounds to the nearest half star', () => {
    const { container } = render(<Rate value={3.8} />);
    const fullStars = starsByFillState(container, true);
    const halfStar = container.querySelector('.rate_star_half');

    expect(fullStars).toHaveLength(3);
    expect(halfStar).toBeInTheDocument();
  });

  it('should reflect the max prop', () => {
    const { container } = render(<Rate value={3} max={10} />);

    const allStars = container.querySelectorAll('.rate_star');

    expect(allStars).toHaveLength(10);
  });

  it('should not call onChange fn', () => {
    const handleChange = jest.fn();
    const { container } = render(<Rate value={3} onChange={handleChange} />);

    const stars = container.querySelectorAll('.rate_star');

    fireEvent.click(stars[2]);

    expect(handleChange).not.toHaveBeenCalled();
  });
});

describe('UI/Interactive Rate', () => {
  it('should allows user to change rating', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <Rate value={0} readonly={false} onChange={handleChange} />
    );
    const stars = container.querySelectorAll('.rate_star');

    fireEvent.click(stars[2]);

    expect(handleChange).toHaveBeenCalledWith(3);
  });

  it('should update rate value on hover', () => {
    const { container } = render(<Rate value={0} readonly={false} />);
    const stars = container.querySelectorAll('.rate_star');

    fireEvent.mouseEnter(stars[2]);

    const fullStars = starsByFillState(container, true);

    expect(fullStars).toHaveLength(3);
  });

  it('should resets value state on mouse leave', () => {
    const { container } = render(<Rate value={0} readonly={false} />);
    const stars = container.querySelectorAll('.rate_star');
    const parent = container.querySelector('.rate_interactive');

    fireEvent.mouseEnter(stars[2]);
    fireEvent.mouseLeave(parent!);

    const emptyStars = starsByFillState(container, false);

    expect(emptyStars).toHaveLength(5);
  });
});
