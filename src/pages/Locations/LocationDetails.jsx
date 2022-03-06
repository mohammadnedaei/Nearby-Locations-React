import LocationItem from "./components/LocationItem";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import useLocationPhotos from "../../hook/useLocationPhotos";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
const LocationDetails = () => {
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

return (
  <div>
 <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        onSwiper={(swiper) => (window.swiper = swiper)}
        slidesPerView={3}
        spaceBetween={50}
        navigation
        loop
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
      >
        {locationPhotos.map(pics => (<SwiperSlide><img alt = "hi" src={pics.prefix + "original" + pics.suffix}/></SwiperSlide>))}
      </Swiper>
  </div>
)
}
export default LocationDetails;
