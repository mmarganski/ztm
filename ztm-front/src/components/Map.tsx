import React from 'react'

type MapProps = {
    activeBusId: string
}

export const Map: React.FunctionComponent<MapProps> = ({ activeBusId }) => (
    <div>
        {activeBusId}
    </div>
)
