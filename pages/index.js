import Confirm from "../components/Confirm"
import LocationSelector from "../components/LocationSelector"
import Map from "../components/Map"
import Navbar from "../components/NavBar"

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-screen flex-1 z-10`,
  mapContainer: `flex-1 w-full h-full`,
  rideRequestContainer: `h-full w-[400px] ml-[1rem] py-[3rem] absolute top-7 left-0 flex flex-col justify-end z-20`,
  rideRequest: `h-full max-h-[700px] bg-white rounded-lg flex-col overflow-scroll scrollbar-hide`,
}

export default function Home() {
  return (
    
    <div className={style.wrapper}>
      <h1></h1>
      <Navbar />
      <div className={style.main}>
        <Map />
      </div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
             <LocationSelector />
              <Confirm />
        </div>
      </div>
    </div>
  )
}
