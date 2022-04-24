import LocationItem from "./components/LocationItem";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import useLocationPhotos from "../../hook/useLocationPhotos";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './locationDetailsStyles.scss';
function getWindowWidth () {
    const { innerWidth: width} = window
    return width
}
const LocationDetails = () => {
    const [windowWidth , setWindowWidth] = useState(getWindowWidth())
    useEffect(() => {
        const handleResize = () => setWindowWidth(getWindowWidth())
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    const {state} = useLocation();
    const { locationName, locationId } = state;
    console.log(locationId)
    console.log("=======================")
    const {requestCallback, locationPhotos} = useLocationPhotos()
    requestCallback(locationId);
    useEffect(() => {
        console.log(locationPhotos);
    }, [locationPhotos])
console.log("location Photos:" + locationPhotos)
const samplePhotos = [
    'https://via.placeholder.com/1080x701',
    'https://via.placeholder.com/1080x702',
    'https://via.placeholder.com/1080x703',
]
return (
  <div className="page">
      <div style={{display:'flex' , flexDirection:'row', alignContent:'space-between'}}>
          <div style={{flexGrow: 1}}>
            <h1 style={{textAlign:'start'}} className="location-title text-2xl font font-extrabold tracking-tight text-gray-900">{locationName}</h1>
          </div>
      </div>
      {samplePhotos.length === 1 ?
         <div>
              {/*<img alt = "hi" src={locationPhotos[0].prefix + "1000x500" + locationPhotos[0].suffix}/>*/}
             <img className="m-auto mt-10" alt = "1080x500" src={samplePhotos[0]}/>
         </div>
         : null }
      {samplePhotos.length === 2 ?
          <div>
              {windowWidth > 740 ?
                  <div style={{margin:'auto'}}>
                      <img className="inline-block w-1/2 m-auto mt-10" alt = "1080x900" src={samplePhotos[0]}/>
                      <img className="inline-block w-1/2 m-auto mt-10" alt = "1080x900" src={samplePhotos[0]}/>
                  </div>
                  :
                  <img className="m-auto mt-10" alt = "1080x900" src={samplePhotos[0]}/>
              }
          </div>
          : null }
      {samplePhotos.length === 3 ?
          <div>
              <div className="inline-block w-1/2">
                  <img className="m-auto mt-10" alt = "1080x900" src={samplePhotos[0]}/>
              </div>
              <div className="inline-block w-1/2">
                  <img className="m-auto mt-10" alt = "1080x900" src={samplePhotos[1]}/>
                  <img className="m-auto mt-10" alt = "1080x900" src={samplePhotos[2]}/>
              </div>
          </div>
          : null }
      {samplePhotos.length === 4 ?
          <div>
              <img alt = "hi" src={locationPhotos[0].prefix + "1000x500" + locationPhotos[0].suffix}/>
              <img alt = "hi" src={locationPhotos[0].prefix + "1000x500" + locationPhotos[0].suffix}/>
              <img alt = "hi" src={locationPhotos[0].prefix + "1000x500" + locationPhotos[0].suffix}/>
              <img alt = "hi" src={locationPhotos[0].prefix + "1000x500" + locationPhotos[0].suffix}/>
          </div>
          : null }
    {samplePhotos.length >= 5 ?
    <div>
        <img alt = "hi" src={locationPhotos[0].prefix + "1000x500" + locationPhotos[0].suffix}/>
        <img alt = "hi" src={locationPhotos[0].prefix + "1000x500" + locationPhotos[0].suffix}/>
        <img alt = "hi" src={locationPhotos[0].prefix + "1000x500" + locationPhotos[0].suffix}/>
        <img alt = "hi" src={locationPhotos[0].prefix + "1000x500" + locationPhotos[0].suffix}/>
        <img alt = "hi" src={locationPhotos[0].prefix + "1000x500" + locationPhotos[0].suffix}/>
    </div> : null}
  </div>
  
)
}
export default LocationDetails;
