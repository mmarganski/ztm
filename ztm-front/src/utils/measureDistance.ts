import { LatLng } from '../types'

export const measureDistance = (position1: LatLng, position2: LatLng) => {
    const earthRadius = 6378.137
    const latDiff = position2.lat * Math.PI / 180 - position1.lat * Math.PI / 180
    const lngDiff = position2.lng * Math.PI / 180 - position1.lng * Math.PI / 180
    const a = Math.sin(latDiff/2) * Math.sin(latDiff/2) +
        Math.cos(position1.lat * Math.PI / 180) * Math.cos(position2.lat * Math.PI / 180) *
        Math.sin(lngDiff/2) * Math.sin(lngDiff/2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    const d = earthRadius * c

    return d * 1000
}
