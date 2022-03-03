import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/Homepage/HomePage";
import LocationsPage from "../pages/Locations/LocationsPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path={"/"} element={<HomePage />} />
            <Route path={"/locations"} element={<LocationsPage />} />
        </Routes>
    )
}
export default AppRoutes;
