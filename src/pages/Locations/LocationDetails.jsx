import useLocationDetails from "../../hook/useLocationDetails";
import LocationItem from "./components/LocationItem";
import {useLocation} from "react-router-dom";
const LocationDetails = (props) => {
  const {state} = useLocation();
const { locationName } = state;
  // const params = useParams();
  // let { locationName } = useParams();
  console.log(locationName)
  // const { state } = props.location
return (
  <div>
  <h1>
   1
  </h1>
  </div>
)
}
export default LocationDetails;
