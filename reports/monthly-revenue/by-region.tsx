import { DataTable, useQuery } from '@iris/sdk';
import { orders, customer } from '@iris/data';

export default function ByRegion() {
  const { rows } = useQuery({
    measures: [orders.revenue, orders.orderCount],
    dimensions: [customer.region],
    orderBy: [[orders.revenue, 'desc']],
  });

  return (
    <DataTable
      title="Revenue by region"
      rows={rows}
      columns={[customer.region, orders.revenue, orders.orderCount]}
    />
  );
}
