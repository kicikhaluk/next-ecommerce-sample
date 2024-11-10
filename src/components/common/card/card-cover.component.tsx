import clsx from 'clsx';
import Image from 'next/image';

import styles from './card.module.scss';

interface ICardCover {
  src: string;
  alt: string;
}

const CardCover = ({ src, alt }: ICardCover) => {
  return (
    <div className={clsx(styles.card_cover)}>
      <Image
        className={styles.card_cover_img}
        src={src}
        alt={alt}
        sizes='100%'
        fill
      />
    </div>
  );
};

export default CardCover;
