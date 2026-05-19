import { Grid, KpiCard, useQuery } from '@iris/sdk';
import { orders, keyOf } from '@iris/data';

export default function Summary() {
  const q = useQuery({
    measures: [orders.revenue, orders.orderCount, orders.averageOrderValue],
  });
  const row = q.rows[0] ?? {};

  return (
    <Grid cols={3}>
      <KpiCard
        label="Revenue (all time)"
        value={row[keyOf(orders.revenue)] as number}
        format="currency"
      />
      <KpiCard
        label="Total orders"
        value={row[keyOf(orders.orderCount)] as number}
        format="integer"
      />
      <KpiCard
        label="Avg order value"
        value={row[keyOf(orders.averageOrderValue)] as number}
        format="currency"
      />
    </Grid>
  );
}
