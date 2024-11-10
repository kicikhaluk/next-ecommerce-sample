import clsx from 'clsx';

import { Flex } from '../flex';

import CardCover from './card-cover.component';
import CardMeta from './card-meta.component';

import styles from './card.module.scss';

interface ICard {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

const Card = ({ children, className }: ICard) => {
  return <Flex className={clsx(styles.card, className)}>{children}</Flex>;
};

Card.Cover = CardCover;
Card.Meta = CardMeta;

export default Card;
