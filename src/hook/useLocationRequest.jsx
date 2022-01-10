import {useCallback, useState} from "react";
import axios from "axios";

function useLocationRequest(pos) {
    const [locationData, setLocationData] = useState([]);
    const [call, setCall] = useState(true);
    const requestCallback = useCallback((pos) => {
        let coordinate = pos.coords;
        console.log(pos)
        let lat = coordinate.latitude;
        let long = coordinate.longitude;
        const geoCode = 'll=' + lat + '%2C' + long;
        console.log(geoCode);
        if (call) {
            axios.get('https://api.foursquare.com/v3/places/search?' + geoCode + '&limit=15', {
                headers: {
                    Authorization: 'fsq3zB/MV9WboPJuSB+jU32nB3ZuHHWzxTS59ObA8ZlYEzU='
                }
            })
                .then(function (response) {
                    if (response.status === 200) {
                        setCall(false);
                        setLocationData(response.data.results);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    setCall(false);
                });
        }
    }, [locationData])

    return {locationData, requestCallback};
}

export default useLocationRequest;