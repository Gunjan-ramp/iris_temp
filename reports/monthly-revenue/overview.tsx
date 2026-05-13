import { KpiCard, LineChart, Grid, useQuery } from '@iris/sdk';
import { orders, customer } from '@iris/data';

export default function Overview() {
  const { rows } = useQuery({
    measures: [orders.revenue],
    dimensions: [customer.region],
    timeDimensions: [{
      dimension: orders.createdAt,
      granularity: 'month',
      dateRange: 'last 12 months',
    }],
  });

  return (
    <>
      <Grid cols={3}>
        <KpiCard label="Total revenue" value={rows.totalRevenue} />
        <KpiCard label="Top region"    value={rows.topRegion} />
        <KpiCard label="MoM growth"    value={rows.momGrowth} format="percent" />
      </Grid>
      <LineChart
        data={rows}
        x={customer.region}
        y={orders.revenue}
        groupBy={orders.createdAt}
      />
    </>
  );
}
