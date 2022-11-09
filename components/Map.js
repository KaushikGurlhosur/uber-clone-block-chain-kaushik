import mapboxgl from "mapbox-gl"
import { useEffect, useContext } from 'react'
import { UberContext } from "../context/uberContext"

const style = {
    wrapper: `flex-1 h-full w-full`,
  }

  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

const Map = () => {
  const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext)

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: "mapbox://styles/kaushikrg/cla5elcp0000i15o1joee8aw4",
            center: [73.9629 , 16.5937],
            zoom: 4,
        })
        if (pickupCoordinates) {
          addToMap(map, pickupCoordinates)
        }
    
        if (dropoffCoordinates) {
          addToMap(map, dropoffCoordinates)
        }
    
        if (pickupCoordinates && dropoffCoordinates) {
          map.fitBounds([dropoffCoordinates, pickupCoordinates], {
            padding: 400,
          })
        }
    }, [pickupCoordinates, dropoffCoordinates])

    
  


    const addToMap = (map, coordinates) => {
      const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
    }

  return <div className={style.wrapper} id='map' />
}

export default Map
