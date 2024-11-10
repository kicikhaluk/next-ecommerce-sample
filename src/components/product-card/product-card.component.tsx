import Link from 'next/link';
import { Star } from 'lucide-react';

import { Card, Title, Text, Flex } from '@/components';

import { type IProduct } from '@/constants/product';

interface IProductCard {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCard): JSX.Element => {
  const { id, rating, price, description, title, thumbnail } = product;
  return (
    <Link href={`/products/${id}`}>
      <Card>
        <Card.Cover src={thumbnail} alt={title} />
        <Card.Meta gap={1}>
          <Title as='h3' size='sm'>
            {title}
          </Title>
          <Text>{description}</Text>
          <Flex
            direction='row'
            alignItems='center'
            justifyContent='space-between'
          >
            <Text>&#36; {price}</Text>
            <Flex direction='row' alignItems='center' gap={0.5}>
              <Text>{rating}</Text>
              <Star fill='#ff7300' stroke='#ff7300' />
            </Flex>
          </Flex>
        </Card.Meta>
      </Card>
    </Link>
  );
};

export default ProductCard;
