import { Tab } from '@/components'
import type { TabItemInterface } from '@/lib/interface'
interface TabListViewProp {
  tabItems: TabItemInterface[]
}
const TabListView = ({ tabItems }: TabListViewProp) => {
  return <Tab tabItems={tabItems} />
}

export default TabListView
