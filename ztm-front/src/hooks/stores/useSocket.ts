import { useStore } from 'outstated'
import { useSocketStore } from 'stores'

export const useSocket = () => useStore(useSocketStore)
