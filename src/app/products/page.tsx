import PageLayout from '@/layout/page.layout';
import { Flex, Grid, ProductCard, Title } from '@/components';
import { type IProduct } from '@/constants/product';

import api from '@/lib/api';

import styles from './page.module.scss';

export default async function Page() {
  const products = await getProducts();

  return (
    <PageLayout>
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
    </PageLayout>
  );
}

const getProducts = async () => {
  const res = await api.get<{ products: IProduct[] }>('/products');
  return res.data.products;
};
