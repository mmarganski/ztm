import { useBusStore } from './useBusStore'
import { usePlacesStore } from './usePlacesStore'
import { useOthersStore } from './useOthersStore'
import { useSocketStore } from './useSocketStore'

export const storeGroup = [
    useBusStore,
    usePlacesStore,
    useOthersStore,
    useSocketStore
]
