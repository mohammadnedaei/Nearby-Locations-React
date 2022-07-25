import Banner from "./components/Banner/Banner";
import AppRoutes from "./routes";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {

    return (
        <div>
            <Banner
                bannerTitle={"Big news!"}
                bannerDescription={"Introducing Android version of app."}
                bannerButtonText={"Install app"}
                bannerPlace={"top"}
                bannerButtonUrl={"https://github.com"}
            />
            <AppRoutes/>
            <ScrollToTop/>
        </div>
    );
}

export default App;
