import { Grid, KpiCard, LineChart, useQuery } from '@iris/sdk';
import { orders, customer, keyOf } from '@iris/data';

export default function Overview() {
  // Headline KPI: total revenue across everything
  const totalQ = useQuery({ measures: [orders.revenue] });
  const totalRevenue = (totalQ.rows[0]?.[keyOf(orders.revenue)] as number) ?? 0;

  // Revenue by region — used for the "top region" KPI and the chart
  const byRegion = useQuery({
    measures: [orders.revenue],
    dimensions: [customer.region],
  });
  const sortedRegions = [...byRegion.rows].sort(
    (a, b) =>
      ((b[keyOf(orders.revenue)] as number) ?? 0) -
      ((a[keyOf(orders.revenue)] as number) ?? 0)
  );
  const topRegion = (sortedRegions[0]?.[keyOf(customer.region)] as string) ?? '—';

  // Time series for the chart — revenue per region per month
  const trend = useQuery({
    measures: [orders.revenue],
    dimensions: [customer.region],
    timeDimensions: [{ dimension: orders.createdAt, granularity: 'month' }],
  });

  return (
    <>
      <Grid cols={3}>
        <KpiCard label="Total revenue" value={totalRevenue} format="currency" />
        <KpiCard label="Top region" value={topRegion} />
        <KpiCard
          label="Regions tracked"
          value={byRegion.rows.length}
          format="integer"
        />
      </Grid>
      <LineChart
        data={trend.rows}
        x={orders.createdAt}
        y={orders.revenue}
        groupBy={customer.region}
        title="Revenue by region"
        height={280}
      />
    </>
  );
}
