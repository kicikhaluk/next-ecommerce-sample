import { Grid } from '@/components';
import { products } from '@/constants/product';

export default function Products() {
  return (
    <Grid>
      {products.map((p) => (
        <Grid.Item key={p.id}>{p.title}</Grid.Item>
      ))}
    </Grid>
  );
}
