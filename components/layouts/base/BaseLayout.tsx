// components
import BaseHeader from "./BaseHeader";
import BaseSideBar from "./BaseSideBar";
import BaseContent from "./BaseContent";

// utils
import { BaseLayoutProps } from "./utils/_base_interfaces";
import {
  _base_style_wrapper,
  _base_style_innerWrapper,
  _base_style_spinner,
} from "./utils/_base_styles";

const BaseLayout: React.FC<BaseLayoutProps> = ({
  children,
  contentPadding = true,
  fixed = false,
}) => {
  const widgetList = [
    { label: "Chart", key: "chart", icon: "PresentationChartLineIcon" },
    { label: "Table", key: "table", icon: "TableCellsIcon" },
    { label: "Form", key: "form", icon: "ClipboardDocumentIcon" },
    { label: "Mail", key: "mail", icon: "EnvelopeIcon" },
    { label: "Date", key: "date", icon: "CalendarDaysIcon" },
    { label: "Notice", key: "notice", icon: "BellIcon" },
    { label: "Setting", key: "setting", icon: "Cog6ToothIcon" },
    { label: "ETC", key: "etc", icon: "GiftIcon" },
  ];
  return (
    <div className={_base_style_wrapper}>
      <BaseHeader />
      <div className={_base_style_innerWrapper}>
        <BaseSideBar />

        <BaseContent contentPadding={contentPadding} fixed={fixed}>
          <>{children}</>
        </BaseContent>
      </div>
    </div>
  );
};

export default BaseLayout;
