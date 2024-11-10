import clsx from 'clsx';
import Image from 'next/image';

import styles from './carousel.module.scss';

interface ICarouselItem {
  src: string;
  alt: string;
  className?: string;
}
const CarouselItem = ({ src, alt, className }: ICarouselItem) => {
  return (
    <div className={clsx(styles.carousel_item, className)}>
      <Image
        className={styles.carousel_item_img}
        src={src}
        alt={alt}
        sizes='100%'
        fill
      />
    </div>
  );
};

export default CarouselItem;
