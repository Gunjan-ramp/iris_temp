import { DataTable, useQuery } from '@iris/sdk';
import { orders, customer } from '@iris/data';

export default function ByRegion() {
  const { rows } = useQuery({
    measures: [orders.revenue],
    dimensions: [customer.region],
    order: { [orders.revenue]: 'desc' },
  });
  return <DataTable rows={rows} />;
}
