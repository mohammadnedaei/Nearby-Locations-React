import './App.css';
import Banner from "./components/Banner";
import AppRoutes from "./routes";
import HomePage from "./pages/Homepage/HomePage.jsx"
//TODO: StoryBook
const App = () => {

    return (
        <div>
            <Banner
                bannerTitle={"Big news!"}
                bannerDescription={"Introducing Android version of app."}
                bannerButtonText={"Learn more"}
                bannerPlace={"top"}
                bannerButtonUrl={"https://gitlab.com"}
            />
            <AppRoutes />
        </div>
    );
}

export default App;
