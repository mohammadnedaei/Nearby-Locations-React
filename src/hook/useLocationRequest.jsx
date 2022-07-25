import {useCallback, useState} from "react";
import axios from "axios";

function useLocationRequest(pos) {
    const [locationData, setLocationData] = useState([]);
    const [call, setCall] = useState(true);
    const requestCallback = useCallback((pos) => {
        let coordinate = pos.coords;
        let lat = coordinate.latitude;
        let long = coordinate.longitude;
        const geoCode = 'll=' + lat + '%2C' + long;
        if (call) {
            axios.get(process.env.REACT_APP_FSQ_PLACES_URL + geoCode + process.env.REACT_APP_FSQ_PLACES_LIMIT, {
                headers: {
                    Authorization: process.env.REACT_APP_FSQ_KEY,
                    'Access-Control-Allow-Origin': '*'
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
    }, [call])

    return {locationData, requestCallback};
}

export default useLocationRequest;
