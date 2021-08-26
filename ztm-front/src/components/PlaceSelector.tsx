import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { AddPlaceModal } from './AddPlaceModal'
import { useOthers, usePlaces } from '../hooks'

type PlaceSelectorProps = {
    isAddingAvailable: boolean
}

export const PlaceSelector: React.FunctionComponent<PlaceSelectorProps> = ({ isAddingAvailable }) => {
    const [isModalActive, setModal] = useState(false)
    const { clickLatLng } = useOthers()
    const {
        places,
        setPlace,
        activePlaces,
        togglePlace
    } = usePlaces()

    const onRemovePlace = (name: string) => {
        setPlace(prevPlaces => prevPlaces.filter(place => place.name !== name))

        if (activePlaces.includes(name)) {
            togglePlace(name)
        }
    }

    const onAddPlace = (newPlace: string, radius: number) => {
        setPlace(places
            .filter(place => place.name !== newPlace)
            .concat({
                name: newPlace,
                lat: clickLatLng.lat,
                lng: clickLatLng.lng,
                radius
            }))

        if (!activePlaces.includes(newPlace)) {
            togglePlace(newPlace)
        }
    }

    return (
        <ListWrapper>
            {places.map((place, index) => (
                <Button
                    key={`${index}-${place.name}`}
                    text={place.name}
                    onClick={() => togglePlace(place.name)}
                    isSelected={activePlaces.includes(place.name)}
                >
                    <DeleteButton onClick={() => onRemovePlace(place.name)}>
                        ▬
                    </DeleteButton>
                </Button>
            ))}
            {isAddingAvailable && (
                <Button
                    text="+"
                    isSelected={false}
                    onClick={() => setModal(true)}
                />
            )}
            <AddPlaceModal
                isActive={isModalActive}
                onClose={() => setModal(false)}
                onAddPlace={onAddPlace}
            />
        </ListWrapper>
    )
}

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  max-height: 10%;
  width: 100%;
  border-bottom: solid 4px black
`

const DeleteButton = styled.div`
  background-color: transparent;
  border: none;
  margin-left: 5px;
  color: black;
  font-size: large;
  :hover{
    cursor: pointer;
  }
`
