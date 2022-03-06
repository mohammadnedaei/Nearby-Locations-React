import {useCallback, useState} from "react";
import axios from "axios";

function useLocationPhotos(id) {
    const [locationPhotos, setlocationPhotos] = useState([]);
    const [call, setCall] = useState(true);
    const requestCallback = useCallback((id) => {
        console.log(id)
        if (call) {
            axios.get('https://api.foursquare.com/v3/places/' + id + '/photos', {
                headers: {
                  //TODO: Add env for both cors (add localhost on fsq)
                    Authorization: 'fsq3450KUYbLF7rdOpFn3lmqe0i+Vp+5vtCJQtQ0ztb8pUk=',
                    'Access-Control-Allow-Origin': '*'
                }
            })
                .then(function (response) {
                    if (response.status === 200) {
                      console.log("photos:" + response);
                        setCall(false);
                        setlocationPhotos(response.data);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    setCall(false);
                });
        }
    }, [locationPhotos])

    return {locationPhotos, requestCallback};
}

export default useLocationPhotos;
