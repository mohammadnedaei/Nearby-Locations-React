import {Avatar} from "@mui/material";
import {useNavigate} from "react-router-dom";
import LocationDetails from "../LocationDetails";
import {useState} from "react";
import useLocationDetails from "../../../hook/useLocationDetails";
const LocationItem = (props) => {
    const avatarBackgrounds = ['purple-avatar', 'red-avatar', 'blue-avatar', 'pink-avatar', 'yellow-avatar', 'green-avatar', 'icy-avatar']
    const {name, location, categories, geocodes, distance} = props ?? {};
    const navigate = useNavigate();
    return (
        <tr onClick={() => {
            console.log(name);
            navigate("/locationDetails", {
              state: {
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
