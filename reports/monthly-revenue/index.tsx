import { Report, Tabs, Tab } from '@iris/sdk';
import Overview from './overview';
import Summary from './summary';
import ByRegion from './by-region';

export default function MonthlyRevenue() {
  return (
    <Report title="Monthly Revenue by Region">
      <Tabs defaultValue="overview">
        <Tab value="overview" label="Overview"><Overview /></Tab>
        <Tab value="summary"  label="Summary"><Summary /></Tab>
        <Tab value="region"   label="By Region"><ByRegion /></Tab>
        
      </Tabs>
    </Report>
  );
}
