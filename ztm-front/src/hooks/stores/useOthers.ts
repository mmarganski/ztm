import { useStore } from 'outstated'
import { useOthersStore } from 'stores'

export const useOthers = () => useStore(useOthersStore)
