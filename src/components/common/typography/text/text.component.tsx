import clsx from 'clsx';
import styles from './text.module.scss';

interface IText {
  as?: 'p' | 'span';
  children: React.ReactNode | React.ReactNode[];
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'white' | 'dark';
  className?: string;
}

const Text = ({
  as: Tag = 'p',
  children,
  size = 'md',
  color = 'dark',
  className,
}: IText) => {
  return (
    <Tag
      className={clsx(
        styles.text,
        styles[`text_s_${size}`],
        styles[`text_${color}`],
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Text;
