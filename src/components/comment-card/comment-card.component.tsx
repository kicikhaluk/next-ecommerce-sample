import { Card, Avatar, Flex, Text, Rate } from '@/components';
import { type IReview } from '@/constants/product';
import { formatDate } from '@/utils/getDate';

interface ICommentCard {
  review: IReview;
}

const CommentCard = ({ review }: ICommentCard) => {
  const { reviewerName, reviewerEmail, comment, date, rating } = review;
  return (
    <Card>
      <Card.Meta gap={1}>
        <Flex direction='row' gap={1}>
          <Avatar src='https://avatar.iran.liara.run/public/44' />
          <Flex direction='column'>
            <Text>{reviewerName}</Text>
            <Text>{reviewerEmail}</Text>
          </Flex>
        </Flex>
        <Text>{comment}</Text>
        <Flex
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Rate readonly value={rating} />
          <Text>{formatDate(date)}</Text>
        </Flex>
      </Card.Meta>
    </Card>
  );
};

export default CommentCard;
