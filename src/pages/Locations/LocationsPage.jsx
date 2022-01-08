import axios from "axios";
import {useEffect, useState} from "react";
import LocationsList from "./components/LocationsList";

const LocationsPage = () => {
    const [locationData , setLocationData] = useState({});
    useEffect(() => {
        axios.get('https://api.foursquare.com/v3/places/search?ll=31%2C31', {
            headers: {
                Authorization: 'fsq3Pf7uqayKsWP6RCLPbEhnAo/WE5mbmhzJum6RNbei4nI='
            }
        })
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    setLocationData(response.data.results);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },[])
    useEffect(() => {
        console.log(locationData);
    },[locationData])
    return(
        <div>
            <LocationsList />
        </div>
    )
}
export default LocationsPage;