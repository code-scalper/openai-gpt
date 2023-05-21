// BreadCrumb
export interface CrumbItemsInterface {
  href: string
  label: string
}

// BaseContent
export interface BaseContentProps {
  children: React.ReactNode | React.ReactNode[]
  contentPadding: boolean
  fixed: boolean
}

// BaseLayout
export interface BaseLayoutProps {
  children: React.ReactNode | React.ReactNode[]
  contentPadding?: boolean
  fixed?: boolean
}
