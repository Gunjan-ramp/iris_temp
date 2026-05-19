import { Report } from '@iris/sdk';
import Overview from './overview';
import Summary from './summary';
import ByRegion from './by-region';

export default function MonthlyRevenue() {
  return (
    <Report
      title="Monthly Revenue by Region"
      subtitle="Mock-data preview — wired to Cube in production"
    >
      <Overview />
      <Summary />
      <ByRegion />
    </Report>
  );
}
