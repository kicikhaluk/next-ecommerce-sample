import clsx from 'clsx';
import GridItem from './grid-item.component';

import styles from './grid.module.scss';

interface IGrid {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode | React.ReactNode[];
  column?: 1 | 2 | 3 | 4;
  gap?: 0 | 0.5 | 1 | 2;
  className?: string;
}

const Grid = ({
  as: Tag = 'div',
  column = 1,
  gap = 1,
  children,
  className,
}: IGrid) => {
  return (
    <Tag
      className={clsx(
        styles.grid,
        styles[`grid_c_${column}`],
        styles[`grid_g_${gap}`],
        className
      )}
    >
      {children}
    </Tag>
  );
};

Grid.Item = GridItem;

export default Grid;
