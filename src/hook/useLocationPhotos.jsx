import {useCallback, useState} from "react";
import axios from "axios";

const useLocationPhotos = () => {
    const [locationPhotos, setlocationPhotos] = useState(null);
    const requestCallback = useCallback((id) => {
        axios.get('https://api.foursquare.com/v3/places/' + id + '/photos', {
            headers: {
                //TODO: rating api (details)
                //TODO: Add env for both cors (add localhost on fsq)
                Authorization: process.env.REACT_APP_FSQ_KEY,
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(function (response) {
                if (response.status === 200) {
                    setlocationPhotos(response.data);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])


    return {locationPhotos, requestCallback};
}

export default useLocationPhotos;
