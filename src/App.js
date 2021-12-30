import './App.css';
import StickyBanner from './components/StickyBanner';

function App() {
    return (
        <div>
            <StickyBanner
                bannerTitle={"Big news!"}
                bannerDescription={"Introducing Android version of app."}
                bannerButtonText={"Learn more"}
                bannerButtonUrl={"https://gitlab.com"}
            />
            <h1>Hi</h1>
        </div>
    );
}

export default App;
