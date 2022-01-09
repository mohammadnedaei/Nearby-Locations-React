import useLocationRequest from "../../../hook/useLocationRequest";
import LocationItem from "./LocationItem";
import Table from "../../../components/Table";

const LocationsList = () => {
const {locationData}  = useLocationRequest();
console.log(locationData);
  return(
        <Table
            tableRow={locationData.map(data => (
                <LocationItem {...data} />
            ))}
        />
  )
}
export default LocationsList;