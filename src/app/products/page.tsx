import { Flex, Grid, ProductCard, Title } from '@/components';
import { products } from '@/constants/product';

import styles from './page.module.scss';

export default function Products() {
  return (
    <Flex className={styles.page} gap={1}>
      <Title as='h2' size='lg'>
        Our Products
      </Title>
      <Grid className={styles.products} column={1}>
        {products.map((product) => (
          <Grid.Item key={product.id}>
            <ProductCard product={product} />
          </Grid.Item>
        ))}
      </Grid>
    </Flex>
  );
}
