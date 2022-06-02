import * as React from 'react';
import LocationItem from "../components/LocationItem";
import {useEffect, useMemo, useState} from "react";
import {useLocation} from "react-router-dom";
import useLocationPhotos from "../../../hook/useLocationPhotos";
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Gradient from 'rgt'
import 'swiper/swiper.scss';
import './locationDetailsStyles.scss';
import textGradients from "../../../configs/textGradients";
import {
    AppBar,
    Button,
    Dialog, Divider,
    IconButton,
    ListItem,
    ListItemText,
    Skeleton,
    Slide,
    Toolbar,
    Typography
} from "@mui/material";
import {List} from "@mui/icons-material";
import {ViewGridIcon} from "@heroicons/react/solid";
import {XIcon} from "@heroicons/react/outline";
import ScrollToTop from "../../../components/ScrollToTop";
import LocationTitle from "./components/LocationTitle";
import LocationPhotosGrid from "./components/LocationPhotosGrid";


const LocationDetails = () => {
    //TODO: properly skeleton for photos grid !important
    const {state} = useLocation();
    const {location, locationName, locationId} = state;
    const locationRegion = location.region ? location.region + ", " : ''
    const locationCountry = location.country ?? ''
    const {requestCallback, locationPhotos} = useLocationPhotos()
    useEffect(() => {
        if (locationPhotos == null) {
            requestCallback(locationId);
        }
    }, [locationPhotos])
    let x = 0
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        if (locationPhotos != null) {
            console.log("hi")
            while (x < locationPhotos.length) {
                setPhotos(arr => [...arr, ...["1", "2"]])
                // photos.set(locationPhotos[0].prefix + "1080x900" + locationPhotos[0].suffix)
                x++
            }
        }
    }, [locationPhotos, setPhotos, x])
    useEffect(() => {
        console.log(photos)
    }, [photos])
    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}} className="page">
            <LocationTitle title={locationName} description={locationRegion + locationCountry}/>
            <LocationPhotosGrid locationName={locationName} photos={photos}/>
            {
                //TODO: Add slider for higher screens
            }

        </div>
    )
}
export default LocationDetails;
