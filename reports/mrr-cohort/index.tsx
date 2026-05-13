import { Report, DataTable, useQuery } from '@iris/sdk';
import { subscriptions } from '@iris/data';

export default function MrrCohort() {
  const { rows } = useQuery({
    measures: [subscriptions.mrr],
    dimensions: [subscriptions.cohortMonth, subscriptions.tenureMonth],
  });

  return (
    <Report title="MRR Cohort">
      <DataTable rows={rows} />
    </Report>
  );
}
