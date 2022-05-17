import LocationItem from "./components/LocationItem";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import useLocationPhotos from "../../hook/useLocationPhotos";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Gradient from 'rgt'
import 'swiper/swiper.scss';
import './locationDetailsStyles.scss';
function getWindowWidth () {
    const { innerWidth: width} = window
    return width
}
const LocationDetails = () => {
    const randomNumber = Math.floor(Math.random() * 11);
    const gradientColors = [
        '#00DFD8',
        '#007CF0',
        '#00008b',
        '#9932cc',
        '#34D1CE',
        '#C335D9',
        '#2cbdf7',
        '#5d0dac',
        '#000428',
        '#004e92',
        '#6441A5',
        '#2a0845'
    ]
    const [windowWidth , setWindowWidth] = useState(getWindowWidth())
    useEffect(() => {
        const handleResize = () => setWindowWidth(getWindowWidth())
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    const {state} = useLocation();
    const { location, locationName, locationId } = state;
    const {requestCallback, locationPhotos} = useLocationPhotos()
    useEffect(() => {
        requestCallback(locationId);
    }, [])

const samplePhotos = [
    'https://via.placeholder.com/1080x701',
]
return (
  <div style={{display:'flex', alignItems:'center', flexDirection:'column'}} className="page">
      <div style={{display:'flex' , flexDirection:'row'}}>
          <div>
            <h1 style={{marginTop: 25, marginBottom: 5}} className="location-title text-2xl font font-extrabold tracking-tight text-gray-900">
                {randomNumber % 2 == 0 ?
                    <Gradient dir="left-to-right" from={gradientColors[randomNumber]} to={gradientColors[randomNumber+1]}>
                        {locationName}
                    </Gradient>
                    :
                    <Gradient dir="left-to-right" from={gradientColors[randomNumber]} to={gradientColors[randomNumber-1]}>
                        {locationName}
                    </Gradient>
                }

            </h1>
              <span>
                  <Gradient dir="right-to-left" from="#00DFD8" to="#007CF0">
                    {location.region ?? ''}, {location.country ?? ''}
                  </Gradient>
              </span>

          </div>
      </div>
    {/*  {samplePhotos.length === 1 ?*/}
    {/*     <div>*/}
    {/*          /!*<img alt = "hi" src={locationPhotos[0].prefix + "1000x500" + locationPhotos[0].suffix}/>*!/*/}
    {/*         <img className="mt-10" alt = "1080x500" src={samplePhotos[0]}/>*/}
    {/*     </div>*/}
    {/*     : null }*/}
    {/*  {samplePhotos.length === 2 ?*/}
    {/*      <div>*/}
    {/*          {windowWidth > 740 ?*/}
    {/*              <div style={{margin:'auto'}}>*/}
    {/*                  <img className="inline-block w-1/2 m-auto mt-10" alt = "1080x900" src={samplePhotos[0]}/>*/}
    {/*                  <img className="inline-block w-1/2 m-auto mt-10" alt = "1080x900" src={samplePhotos[0]}/>*/}
    {/*              </div>*/}
    {/*              :*/}
    {/*              <img className="m-auto mt-10" alt = "1080x900" src={samplePhotos[0]}/>*/}
    {/*          }*/}
    {/*      </div>*/}
    {/*      : null }*/}
    {/*  {samplePhotos.length === 3 ?*/}
    {/*      <div>*/}
    {/*          <div className="inline-block w-1/2">*/}
    {/*              <img className="m-auto mt-10" alt = "1080x900" src={samplePhotos[0]}/>*/}
    {/*          </div>*/}
    {/*          <div className="inline-block w-1/2">*/}
    {/*              <img className="m-auto mt-10" alt = "1080x900" src={samplePhotos[1]}/>*/}
    {/*              <img className="m-auto mt-10" alt = "1080x900" src={samplePhotos[2]}/>*/}
    {/*          </div>*/}
    {/*      </div>*/}
    {/*      : null }*/}
    {/*  {samplePhotos.length === 4 ?*/}
    {/*      <div>*/}
    {/*          <img alt = "hi" src={locationPhotos[0].prefix + "1000x500" + locationPhotos[0].suffix}/>*/}
    {/*          <img alt = "hi" src={locationPhotos[0].prefix + "1000x500" + locationPhotos[0].suffix}/>*/}
    {/*          <img alt = "hi" src={locationPhotos[0].prefix + "1000x500" + locationPhotos[0].suffix}/>*/}
    {/*          <img alt = "hi" src={locationPhotos[0].prefix + "1000x500" + locationPhotos[0].suffix}/>*/}
    {/*      </div>*/}
    {/*      : null }*/}
    {/*{samplePhotos.length >= 5 ?*/}
    {/*<div>*/}
    {/*    <img alt = "hi" src={locationPhotos[0].prefix + "1000x500" + locationPhotos[0].suffix}/>*/}
    {/*    <img alt = "hi" src={locationPhotos[0].prefix + "1000x500" + locationPhotos[0].suffix}/>*/}
    {/*    <img alt = "hi" src={locationPhotos[0].prefix + "1000x500" + locationPhotos[0].suffix}/>*/}
    {/*    <img alt = "hi" src={locationPhotos[0].prefix + "1000x500" + locationPhotos[0].suffix}/>*/}
    {/*    <img alt = "hi" src={locationPhotos[0].prefix + "1000x500" + locationPhotos[0].suffix}/>*/}
    {/*</div> : null}*/}
  </div>
)
}
export default LocationDetails;
