import './App.css';
import Banner from "./components/Banner";
import AppRoutes from "./routes";
import HomePage from "./pages/Homepage/HomePage.jsx"
import ScrollToTop from "./components/ScrollToTop";
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
            <ScrollToTop />
        </div>
    );
}

export default App;
