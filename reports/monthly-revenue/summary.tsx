import { KpiCard, Grid, useQuery } from '@iris/sdk';
import { orders } from '@iris/data';

export default function Summary() {
  const ttm = useQuery({ measures: [orders.revenue], dateRange: 'last 12 months' });
  const qtr = useQuery({ measures: [orders.revenue], dateRange: 'last quarter' });

  return (
    <Grid cols={2}>
      <KpiCard label="Revenue (TTM)"     value={ttm.rows.total} />
      <KpiCard label="Revenue (quarter)" value={qtr.rows.total} />
    </Grid>
  );
}
