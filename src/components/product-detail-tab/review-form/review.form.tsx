'use client';
import * as React from 'react';
import { Card, Rate, Title, VSpacer, Text, Flex } from '@/components';
import { submitReview } from '@/app/actions';

import styles from './review.form.module.scss';
import { useRouter } from 'next/navigation';

interface IReviewForm {
  productId: number;
}

export function ReviewForm({ productId }: IReviewForm) {
  const [comment, setComment] = React.useState('');
  const [rating, setRating] = React.useState(0);
  const [error, setError] = React.useState('');
  const router = useRouter();

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await submitReview(productId, rating, comment);
      setComment('');
      setRating(0);
      router.refresh();
    } catch (err) {
      console.log(err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <Card>
      <Card.Meta>
        <form onSubmit={onFormSubmit}>
          <Title size='sm'>Write a Review</Title>
          <VSpacer />
          {error && <Text className={styles.error}>{error}</Text>}
          <VSpacer>
            <Flex className={styles.form_elements}>
              <label htmlFor='comment'>Comment:</label>
              <textarea
                id='comment'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
            </Flex>
          </VSpacer>
          <VSpacer>
            <Flex className={styles.form_elements}>
              <label htmlFor='rating'>Rating:</label>
              <Rate
                value={rating}
                onChange={(value) => setRating(value)}
                readonly={false}
              />
            </Flex>
          </VSpacer>
          <button type='submit' className={styles.button}>
            Submit Review
          </button>
        </form>
      </Card.Meta>
    </Card>
  );
}
