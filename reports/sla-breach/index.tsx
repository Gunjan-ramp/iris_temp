import { Report, BarChart, useQuery } from '@iris/sdk';
import { tickets } from '@iris/data';

export default function SlaBreach() {
  const { rows } = useQuery({
    measures: [tickets.breachCount],
    dimensions: [tickets.priority],
    timeDimensions: [{ dimension: tickets.openedAt, granularity: 'week' }],
  });

  return (
    <Report title="SLA breach summary">
      <BarChart data={rows} x={tickets.priority} y={tickets.breachCount} />
    </Report>
  );
}
