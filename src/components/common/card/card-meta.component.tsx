import clsx from 'clsx';

import { Flex } from '../flex';

import styles from './card.module.scss';

interface ICardMeta {
  children: React.ReactNode | React.ReactNode[];
}

const CardMeta = ({ children }: ICardMeta) => {
  return <Flex className={clsx(styles.card_meta)}>{children}</Flex>;
};

export default CardMeta;
