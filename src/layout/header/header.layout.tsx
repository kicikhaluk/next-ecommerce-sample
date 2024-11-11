'use client';

import { useRouter } from 'next/navigation';
import { Flex, Title } from '@/components';

import { logout } from '@/app/actions';

import styles from './header.module.scss';

export default function Header() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  return (
    <Flex
      as='header'
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      className={styles.header}
    >
      <Title>E-Commerce Sample</Title>
      <button onClick={handleLogout} className={styles.button}>
        Logout
      </button>
    </Flex>
  );
}
