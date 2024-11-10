import clsx from 'clsx';
import Image from 'next/image';

import styles from './avatar.module.scss';

interface IAvatar {
  src: string;
  alt?: string;
}

const Avatar = ({ src, alt }: IAvatar) => {
  return (
    <div className={clsx(styles.avatar)}>
      <Image src={src} alt={alt ?? 'Avatar'} width={48} height={48} />
    </div>
  );
};

export default Avatar;
