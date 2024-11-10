'use client';
import * as React from 'react';
import clsx from 'clsx';

import { Flex } from '@/components';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import styles from './carousel.module.scss';
import CarouselItem from './carousel-item.component';

export interface ICarousel {
  images: { src: string; alt?: string }[];
}

const Carousel = ({ images }: ICarousel) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel_item_wrapper}>
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            src={image.src}
            alt={image.alt ?? 'Describes product'}
            className={index === currentIndex ? styles.active : ''}
          />
        ))}
      </div>
      <button
        className={clsx(styles.carousel_actions, styles.carousel_actions_prev)}
        onClick={prevSlide}
        aria-label='Previous slide'
      >
        <ArrowLeft width={24} height={24} />
      </button>
      <button
        className={clsx(styles.carousel_actions, styles.carousel_actions_next)}
        onClick={nextSlide}
        aria-label='Next slide'
      >
        <ArrowRight width={24} height={24} />
      </button>
      <Flex
        direction='row'
        alignItems='center'
        gap={0.5}
        className={styles.carousel_indicator}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className={clsx(
              styles.carousel_indicator_item,
              index === currentIndex && styles.active
            )}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </Flex>
    </div>
  );
};

export default Carousel;
