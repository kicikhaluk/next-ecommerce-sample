'use client';

import * as React from 'react';
import clsx from 'clsx';
import { Star, StarHalf } from 'lucide-react';

import styles from './rate.module.scss';

export interface IRate {
  value: number;
  max?: number;
  readonly?: boolean;
  onChange?: (value: number) => void;
}

export default function Rate({
  value,
  max = 5,
  readonly = true,
  onChange,
}: IRate) {
  const [hoverValue, setHoverValue] = React.useState(0);

  const handleClick = (newValue: number) => {
    if (!readonly) {
      onChange?.(newValue);
    }
  };

  const handleMouseEnter = (newValue: number) => {
    if (!readonly) {
      setHoverValue(newValue);
    }
  };

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverValue(0);
    }
  };

  const renderStar = (index: number) => {
    const starValue = index + 1;
    const fillValue = hoverValue || value;

    if (starValue <= fillValue) {
      return (
        <Star
          key={index}
          className={clsx(styles.rate_star, styles.rate_star_full)}
          onClick={() => handleClick(starValue)}
          onMouseEnter={() => handleMouseEnter(starValue)}
        />
      );
    } else if (starValue - 0.5 <= fillValue) {
      return (
        <StarHalf
          key={index}
          className={clsx(styles.rate_star, styles.rate_star_half)}
          onClick={() => handleClick(starValue - 0.5)}
          onMouseEnter={() => handleMouseEnter(starValue - 0.5)}
        />
      );
    } else {
      return (
        <Star
          key={index}
          className={clsx(styles.rate_star, styles.rate_star_empty)}
          onClick={() => handleClick(starValue)}
          onMouseEnter={() => handleMouseEnter(starValue)}
        />
      );
    }
  };

  return (
    <div
      className={clsx(
        styles.rate,
        readonly ? styles.rate_readonly : styles.rate_interactive
      )}
      onMouseLeave={handleMouseLeave}
    >
      {[...Array(max)].map((_, index) => renderStar(index))}
    </div>
  );
}
