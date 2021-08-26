import { useStore } from 'outstated'
import { useBusStore } from 'stores'

export const useBus = () => useStore(useBusStore)
