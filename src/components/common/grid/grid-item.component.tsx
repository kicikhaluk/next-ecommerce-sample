import clsx from 'clsx';
import styles from './grid.module.scss';

interface IGridItem {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

const GridItem = ({ as: Tag = 'div', children, className }: IGridItem) => {
  return <Tag className={clsx(styles.grid_item, className)}>{children}</Tag>;
};

export default GridItem;
