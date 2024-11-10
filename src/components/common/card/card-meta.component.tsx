import clsx from 'clsx';

import { Flex, IFlex } from '../flex';

import styles from './card.module.scss';

interface ICardMeta extends IFlex {}

const CardMeta = ({ children, className, ...props }: ICardMeta) => {
  return (
    <Flex className={clsx(styles.card_meta, className)} {...props}>
      {children}
    </Flex>
  );
};

export default CardMeta;
