import LocationItem from "./LocationItem";

const LocationData = [{name: 'james'},{name: 'paul'},{name: 'll'}];

const LocationsList = () => {
  return(
      LocationData.map(data => (
          <LocationItem {...data}
          />
      ))
  )
}
export default LocationsList;