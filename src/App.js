import './App.css';
import Banner from './components/Banner';
import HeroSection1 from "./components/HeroSection1";

//TODO: StoryBook
function App() {
    return (
        <div>
            <Banner
                bannerTitle={"Big news!"}
                bannerDescription={"Introducing Android version of app."}
                bannerButtonText={"Learn more"}
                bannerPlace={"top"}
                bannerButtonUrl={"https://gitlab.com"}
            />
            <HeroSection1
                heroSection1Title={"Find nearby locations easily"}
                heroSection1Description={"A public service to explore your current nearby locations as fast as possible." +
                " Even more, find your nearby locations details."}
                heroSection1ButtonText={"Explore Locations"}
            />

        </div>
    );
}

export default App;
