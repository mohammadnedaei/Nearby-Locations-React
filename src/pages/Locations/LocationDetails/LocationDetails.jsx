import {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import useLocationPhotos from "../../../hook/useLocationPhotos";
import './locationDetailsStyles.scss';
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
    }, [locationId, locationPhotos, requestCallback])
    const [photos, setPhotos] = useState(null)
    let x = 0

    useEffect(() => {
        if (locationPhotos != null) {
            setPhotos([])
            while (x < locationPhotos.length) {
                let y = locationPhotos[x].prefix + "1080x900" + locationPhotos[x].suffix
                setPhotos(arr => [...arr, y])
                // photos.set(locationPhotos[0].prefix + "1080x900" + locationPhotos[0].suffix)
                x++
            }
        }
    }, [locationPhotos, setPhotos, x])
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
