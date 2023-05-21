interface ArrangeOptionInterface {
  cols: number
  gap: number
}

interface SelectOptionsInterface {
  key: string | number
  label: string
}

interface SelectFilterOptionsInterface extends SelectOptionsInterface {
  type?: string
}

interface SearchOptionInterface {
  key: string
  label: string
  type: string
  options?: SelectOptionsInterface[]
  url?: string
  params?: any
  mapper?: { key: string; label: string }
}

export type {
  SelectFilterOptionsInterface,
  ArrangeOptionInterface,
  SearchOptionInterface,
  SelectOptionsInterface
}
