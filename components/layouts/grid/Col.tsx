interface ColProps {
  children: React.ReactNode
  className?: string
}

const Col = ({ children, className }: ColProps) => {
  return <div className={className}>{children}</div>
}

export default Col
