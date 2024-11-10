'use client';
import { Text, Flex, Tab, Title, CommentCard } from '@/components';
import { type IProduct } from '@/constants/product';

interface IProductTabs {
  product: IProduct;
}

const ProductTabs = ({ product }: IProductTabs) => {
  const {
    dimensions,
    description,
    returnPolicy,
    shippingInformation,
    warrantyInformation,
    reviews,
  } = product;
  return (
    <Tab defaultActiveTab='specification'>
      <Tab.List>
        <Tab.Trigger id='specification' title='Specification' />
        <Tab.Trigger id='reviews' title='Reviews' />
      </Tab.List>
      <Tab.Content>
        <Tab.Pane id='specification'>
          <Flex gap={0.5}>
            <Text>{description}</Text>
            <Title as='h4' size='xs'>
              Dimensions
            </Title>
            <Text>Width: {dimensions.width}</Text>
            <Text>Height: {dimensions.height}</Text>
            <Text>Depth: {dimensions.depth}</Text>
            <Title as='h4' size='xs'>
              Return Policy
            </Title>
            <Text>{returnPolicy}</Text>
            <Title as='h4' size='xs'>
              Shipping Information
            </Title>
            <Text>{shippingInformation}</Text>
            <Title as='h4' size='xs'>
              Warranty Information
            </Title>
            <Text>{warrantyInformation}</Text>
          </Flex>
        </Tab.Pane>
        <Tab.Pane id='reviews'>
          <Flex direction='column' gap={1}>
            {reviews.map((review) => (
              <CommentCard key={review.date} review={review} />
            ))}
          </Flex>
        </Tab.Pane>
      </Tab.Content>
    </Tab>
  );
};

export default ProductTabs;
