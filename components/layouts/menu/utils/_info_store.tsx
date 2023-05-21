import { v1 } from 'uuid'
import { atom } from 'recoil'
const INFO_STATE = atom({
  key: `infoState${v1()}`,
  default: {
    systemTitle: 'SAMPLE SYSTEM'
  }
})

export { INFO_STATE }
