import PageLayout from '@/layout/page.layout';
import {
  Carousel,
  Flex,
  ProductDetailTab,
  Rate,
  Title,
  Text,
  VSpacer,
} from '@/components';
import { type IProduct, IMAGES } from '@/constants/product';
import api from '@/lib/api';

import styles from './page.module.scss';

export default async function Page({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);

  return (
    <PageLayout>
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
                ...IMAGES,
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
    </PageLayout>
  );
}

const getProductById = async (id: string) => {
  const res = await api.get<{ product: IProduct }>(`/products/${id}`);
  return res.data.product;
};
