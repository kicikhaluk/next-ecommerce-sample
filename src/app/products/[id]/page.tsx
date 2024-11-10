import {
  Carousel,
  Flex,
  ProductDetailTab,
  Rate,
  Title,
  Text,
  VSpacer,
} from '@/components';
import { products, images } from '@/constants/product';

import styles from './page.module.scss';

const Page = () => {
  const product = products[0];
  return (
    <Flex as='section' className={styles.page} gap={1}>
      <Title as='h2' size='lg'>
        Product Detail
      </Title>
      {/** Added more images statically to help visual test.
       * Becasue Used datasets has mostly just one image.
       */}
      <VSpacer spacing={2}>
        <Flex className={styles.page_showcase} direction='column' gap={2}>
          <Carousel
            images={[
              ...product.images.map((img) => ({ src: img, alt: img })),
              ...images,
            ]}
          />
          <Flex gap={1}>
            <Title as='h3'>{product.title}</Title>
            {product.brand && <Text>{product.brand}</Text>}
            <Text>Category: {product.category}</Text>
            <Text>Stock: {product.stock}</Text>
            <Text>Status: {product.availabilityStatus}</Text>
            <Rate value={product.rating} />
            <Text size='sm'>SKU:{product.sku}</Text>
          </Flex>
        </Flex>
      </VSpacer>
      <ProductDetailTab product={product} />
    </Flex>
  );
};

export default Page;
