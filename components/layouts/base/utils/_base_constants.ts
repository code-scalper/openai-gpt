import {
  PAGE_LABELS,
  BASIC_ENTITY_STATUS,
  BASIC_TYPES
} from '@/lib/pageCompose/Constants'

const KEYS = {}
const LABELS = {
  ...PAGE_LABELS,
  SAVE: 'Save',
  EDIT: 'Edit'
}
const TYPES = {
  ...BASIC_TYPES
}

const ENTITY_STATUS = {
  ...BASIC_ENTITY_STATUS // UPDATE, DELETE, CREATE ...
}

export { KEYS, LABELS, TYPES, ENTITY_STATUS }
