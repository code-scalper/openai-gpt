import React from "react";

interface ContentViewerProps {
  content: any;
  className?: string;
  tabContents?: any;
}

const ContentViewer = ({
  content = null,
  className = "",
}: ContentViewerProps) => {
  if (content !== null) {
    // console.log(icon, 'icon!')ss
    return React.createElement(content, {
      className,
    });
  } else {
    return <></>;
  }
};

export default ContentViewer;
