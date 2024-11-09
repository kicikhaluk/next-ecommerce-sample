import clsx from 'clsx';
import styles from './flex.module.scss';

interface IFlex {
  as?: keyof JSX.IntrinsicElements;
  direction?: 'column-reverse' | 'column' | 'row-reverse' | 'row';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'strech' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  gap?: 0 | 0.5 | 1 | 2;
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

const Flex = ({
  as: Tag = 'div',
  direction = 'column',
  alignItems = 'strech',
  justifyContent = 'flex-start',
  gap = 0,
  className,
  children,
}: IFlex): JSX.Element => {
  return (
    <Tag
      className={clsx(
        styles.flex,
        styles[`flex_d_${direction}`],
        styles[`flex_align_${alignItems}`],
        styles[`flex_justify_${justifyContent}`],
        styles[`flex_g_${gap}`],
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Flex;
