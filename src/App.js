import Banner from "./components/Banner";
import AppRoutes from "./routes";
import ScrollToTop from "./components/ScrollToTop";
// TODO: StoryBook
// TODO: Add install button in settings for PWA desktop
// TODO: Service Worker for push notifications
// TODO: Service Worker for Cache
// TODO: Service Worker for fetch
const App = () => {

    return (
        <div>
            <Banner
                bannerTitle={"Big news!"}
                bannerDescription={"Introducing Android version of app."}
                bannerButtonText={"Learn more"}
                bannerPlace={"top"}
                bannerButtonUrl={"https://github.com"}
            />
            <AppRoutes/>
            <ScrollToTop/>
        </div>
    );
}

export default App;