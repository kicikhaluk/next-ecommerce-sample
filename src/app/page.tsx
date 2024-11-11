'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { Flex, Title, Card, VSpacer, Text } from '@/components';

import { login } from '@/app/actions';

import styles from './page.module.scss';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type='submit' className={styles.button} disabled={pending}>
      {pending ? 'Logging in...' : 'Login'}
    </button>
  );
}

export default function LoginPage() {
  const [state, formAction] = useFormState(login, null);

  return (
    <Flex alignItems='center' justifyContent='center' className={styles.page}>
      <Card className={styles.page_card}>
        <Card.Meta>
          <form action={formAction}>
            <Title as='h1' size='lg'>
              Login
            </Title>
            <VSpacer />
            {state?.error && (
              <Text className={styles.error}>{state.error}</Text>
            )}
            <VSpacer className={styles.form_elements}>
              <label htmlFor='email'>Email:</label>
              <input type='email' id='email' name='email' required />
            </VSpacer>
            <VSpacer className={styles.form_elements}>
              <label htmlFor='password'>Password:</label>
              <input type='password' id='password' name='password' required />
            </VSpacer>
            <SubmitButton />
          </form>
        </Card.Meta>
      </Card>
    </Flex>
  );
}
