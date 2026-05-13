import { Report, KpiCard, Grid, useQuery } from '@iris/sdk';
import { orders, tickets } from '@iris/data';

export default function ExecDashboard() {
  const revenue = useQuery({ measures: [orders.revenue] });
  const slas    = useQuery({ measures: [tickets.breachCount] });

  return (
    <Report title="Exec dashboard">
      <Grid cols={2}>
        <KpiCard label="Revenue (TTM)" value={revenue.rows.total} />
        <KpiCard label="SLA breaches"  value={slas.rows.total} />
      </Grid>
    </Report>
  );
}
