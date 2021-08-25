import { useActiveBussesStore } from './useActiveBussesStore'
import { useActivePlacesStore } from './useActivePlacesStore'
import { useBusListStore } from './useBusListStore'
import { useBusPositionsStore } from './useBusPositionsStore'
import { useClickLatLngStore } from './useClickLatLngStore'
import { usePlaceStore } from './usePlaceStore'

export const storeGroup = [
    useActiveBussesStore,
    useActivePlacesStore,
    useBusListStore,
    useBusPositionsStore,
    useClickLatLngStore,
    usePlaceStore
]
