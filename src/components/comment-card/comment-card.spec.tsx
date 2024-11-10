import { render, screen } from '@testing-library/react';
import CommentCard from './comment-card.component';

const review = {
  rating: 2,
  comment: 'Very unhappy with my purchase!',
  date: '2024-05-23T08:56:21.618Z',
  reviewerName: 'John Doe',
  reviewerEmail: 'john.doe@x.dummyjson.com',
};

describe('UI/CommentCard', () => {
  it('renders comment card with reviewer information, comment, rating and date data', () => {
    render(<CommentCard review={review} />);
    const name = screen.getByText(review.reviewerName);
    const email = screen.getByText(review.reviewerEmail);
    const comment = screen.getByText(review.comment);

    expect(name).toBeInTheDocument();
    expect(comment).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
