import clsx from 'clsx';
import styles from './vspacer.module.scss';

interface IVSpacer {
  children?: React.ReactNode | React.ReactNode[];
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  spacing?: 0 | 1 | 2 | 3 | 4;
}

const VSpacer = ({
  as: Tag = 'div',
  children,
  spacing = 1,
  className,
}: IVSpacer) => {
  return (
    <Tag
      className={clsx(styles.spacer, styles[`spacer_${spacing}`], className)}
    >
      {children}
    </Tag>
  );
};

export default VSpacer;
