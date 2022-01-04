import axios from "axios";

const LocationsPage = () => {
    axios.get('https://api.foursquare.com/v3/places/search?ll=31%2C31', {
        headers: {
            Authorization: 'fsq3Pf7uqayKsWP6RCLPbEhnAo/WE5mbmhzJum6RNbei4nI='
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    return(
        <h1>Hi</h1>
    )
}
export default LocationsPage;