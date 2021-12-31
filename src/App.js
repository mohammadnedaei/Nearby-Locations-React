import './App.css';
import StickyBanner from './components/StickyBanner';

function App() {
    return (
        <div>
            <StickyBanner
                bannerTitle={"Big news!"}
                bannerDescription={"Introducing Android version of app."}
                bannerButtonText={"Learn more"}
                bannerFixedPlace={"top"}
                bannerButtonUrl={"https://gitlab.com"}
            />

            <h1>Hi</h1>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <h1>Hi</h1>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <h1>Hi</h1>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}

export default App;
