import {Avatar} from "@mui/material";

const LocationItem = (props) => {
    const avatarBackgrounds = ['purple-avatar','red-avatar','blue-avatar','pink-avatar','yellow-avatar','green-avatar','icy-avatar']
    const {name,location,categories,geocodes,distance} = props??{};
    return(
        <tr onClick={() => {
            console.log('cl');
        }} className="responsive-table__row">
            <td className="responsive-table__body__text responsive-table__body__text--name">
                <Avatar className={`user-icon ${avatarBackgrounds[Math.floor(Math.random() * 7)]}`} alt="Remy Sharp" src={categories[0].icon.prefix+'120'+'.png'} />
                 {name??''}
            </td>
            <td className="responsive-table__body__text responsive-table__body__text--distance" data-title="distance">{distance+'m'}</td>
            <td className="responsive-table__body__text responsive-table__body__text--types" data-title="type">{categories[0].name??''}</td>
            <td className="responsive-table__body__text responsive-table__body__text--address" data-title="address">{location.address+' '+location.cross_street}</td>
            <td className="responsive-table__body__text responsive-table__body__text--country">{location.country??''} / {location.region??''}</td>
        </tr>
    )
}
export default LocationItem;