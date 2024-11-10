import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from './carousel.component';

const images = [
  {
    src: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
    alt: 'Placeholder 1',
  },
  {
    src: 'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png',
    alt: 'Placeholder 2',
  },
  {
    src: 'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png',
    alt: 'Placeholder 3',
  },
];

describe('UI/Carousel', () => {
  it('should shows the first image when initially rendered', () => {
    render(<Carousel images={images} />);
    const firstImage = screen.getByAltText('Placeholder 1');
    expect(firstImage).toBeVisible();
  });

  it('should display next image when next button clicked', () => {
    render(<Carousel images={images} />);
    const nextButton = screen.getByLabelText('Next slide');
    fireEvent.click(nextButton);
    const secondImage = screen.getByAltText('Placeholder 2');
    expect(secondImage).toBeVisible();
  });

  it('should dipslay previous image when previous button clicked', () => {
    render(<Carousel images={images} />);
    const prevButton = screen.getByLabelText('Previous slide');
    fireEvent.click(prevButton);
    const lastImage = screen.getByAltText('Placeholder 3');
    expect(lastImage).toBeVisible();
  });

  it('should goes to the slide when indicator is clicked', () => {
    render(<Carousel images={images} />);
    const indicators = screen.getAllByRole('button');
    fireEvent.click(indicators[2]);
    const thirdImage = screen.getByAltText('Placeholder 3');
    expect(thirdImage).toBeVisible();
  });
});
