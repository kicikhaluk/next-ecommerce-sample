import clsx from 'clsx';
import styles from './title.module.scss';

interface ITitle extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'white' | 'dark';
  weight?: 'medium' | 'bold';
}

const Title = ({
  as: Tag = 'h3',
  children,
  size = 'md',
  color = 'dark',
  weight = 'medium',
  className,
  ...props
}: ITitle) => {
  return (
    <Tag
      className={clsx(
        styles.title,
        styles[`title_s_${size}`],
        styles[`title_${color}`],
        styles[`title_w_${weight}`],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Title;
