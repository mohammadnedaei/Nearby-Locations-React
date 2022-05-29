import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/Homepage/HomePage";
import LocationsPage from "../pages/Locations/LocationsPage";
import LocationDetails from "../pages/Locations/LocationDetails/LocationDetails";
const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path={"/"} element={<HomePage />} />
            <Route path={"/locations"} element={<LocationsPage />} />
            <Route path={"/locationDetails"} element={<LocationDetails />} />
        </Routes>
    )
}
export default AppRoutes;
