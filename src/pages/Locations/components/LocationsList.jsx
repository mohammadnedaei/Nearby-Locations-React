import useLocationRequest from "../../../hook/useLocationRequest";
import LocationItem from "./LocationItem";

const LocationsList = () => {
const {locationData}  = useLocationRequest();
console.log(locationData);
  return(
      locationData.map(data => (
          <div>
          <LocationItem {...data}
          />
              <h1>--</h1>
          </div>

      ))
  )
}
export default LocationsList;