import {useCallback, useState} from "react";
import axios from "axios";

const useLocationPhotos = () => {
    const [locationPhotos, setLocationPhotos] = useState(null);
    const requestCallback = useCallback((id) => {
        axios.get(process.env.REACT_APP_FSQ_PLACES_URL + id + '/photos', {
            headers: {
                //TODO: rating api (details)
                Authorization: process.env.REACT_APP_FSQ_KEY,
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(function (response) {
                if (response.status === 200) {
                    setLocationPhotos(response.data);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])


    return {locationPhotos, requestCallback};
}

export default useLocationPhotos;
