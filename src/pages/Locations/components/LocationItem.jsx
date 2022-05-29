import {Avatar} from "@mui/material";
import {useNavigate} from "react-router-dom";
import LocationDetails from "../LocationDetails/LocationDetails";
import {useState} from "react";
const LocationItem = (props) => {
    const avatarBackgrounds = ['purple-avatar', 'red-avatar', 'blue-avatar', 'pink-avatar', 'yellow-avatar', 'green-avatar', 'icy-avatar']
    const {name, location, categories, geocodes, distance, fsq_id} = props ?? {};
    const navigate = useNavigate();
    return (
        <tr onClick={() => {
            console.log(name);
            navigate("/locationDetails", {
              state: {
                location: location,
                locationId : fsq_id,
                locationName: name,
              }
            });
        }} className="table-row">
            <td className="table-body-text table-body-text-name">
                <Avatar className={`user-icon ${avatarBackgrounds[Math.floor(Math.random() * 7)]}`} alt="Remy Sharp"
                        src={(categories[0].icon.prefix + '120.png') ?? ''}/>
                {name ?? ''}
            </td>
            <td className="table-body-text table-body-text-distance" data-title="distance">{distance + 'm'}</td>
            <td className="table-body-text table-body-text-types" data-title="type">{categories[0].name ?? ''}</td>
            <td className="table-body-text table-body-text-address"
                data-title="address">{(location.address ?? '') + ' ' + (location.cross_street ?? '')}</td>
            <td className="table-body-text table-body-text-country">{location.country ?? ''} / {location.region ?? ''}</td>
        </tr>
    )
}
export default LocationItem;
