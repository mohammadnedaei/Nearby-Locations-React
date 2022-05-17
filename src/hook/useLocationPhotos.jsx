import {useCallback, useState} from "react";
import axios from "axios";

const useLocationPhotos = () => {
    const [locationPhotos, setlocationPhotos] = useState(null);
    const requestCallback = useCallback((id) => {
        console.log(id)
            fetch('https://api.foursquare.com/v3/places/' + id + '/photos', {
                method: "GET",
                headers: {
                    //TODO: rating api (details)
                    //TODO: Add env for both cors (add localhost on fsq)
                    Authorization: 'fsq3450KUYbLF7rdOpFn3lmqe0i+Vp+5vtCJQtQ0ztb8pUk=',
                    'Access-Control-Allow-Origin': '*'
                }
            })
                .then(function (response) {
                    if (response.status === 200) {
                        console.log("photos:" + response);
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
