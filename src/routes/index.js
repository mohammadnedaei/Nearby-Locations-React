import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/Homepage/HomePage";
import LocationsPage from "../pages/Locations/LocationsPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path={"/locations"} element={<LocationsPage />} />
        </Routes>
    )
}
export default AppRoutes;