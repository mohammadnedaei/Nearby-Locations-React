import LocationItem from "./LocationItem";
import Table from "../../../components/Table";
import useLocationRequest from "../../../hook/useLocationRequest";
import {useEffect} from "react";

const LocationsList = () => {
    const {requestCallback, locationData} = useLocationRequest()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            console.log(pos);
            requestCallback(pos);
        }, (e) => {
            console.log(e);
        }, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        })
    }, [])
    return (
        <Table
            tableRow={locationData.map(data => (
                <LocationItem {...data} />
            ))}
        />
    )
}
export default LocationsList;