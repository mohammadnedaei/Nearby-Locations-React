import './App.css';
import Banner from './components/Banner';
import HeroSection1 from "./components/HeroSection1";
import {useState} from "react";
import {Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

//TODO: StoryBook
function App() {
    const [open, setOpen] = useState(false)
    const handleDialogOpen = () => {
        setOpen(true);
    }
    const handleDialogClose = () => {
        setOpen(false);
    }
    const handleLocationAvailability = () => {
        setOpen(false);
        if (navigator.geolocation) {
            console.log("Device has Geolocation Availability");
            navigator.permissions.query({name: "geolocation"}).then((result) => {
                if (result.state === "granted") {
                    console.log(result.state);
                    navigator.geolocation.getCurrentPosition(success);
                }
                else if (result.state === "prompt"){
                    console.log(result.state);
                    navigator.geolocation.getCurrentPosition(success, errors, options);
                }
                else if (result.state === "denied") {
                    console.log(result.state);
                }
            })
        }
    }
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }
    const success = (pos) => {
        let coordinate = pos.coords;
        console.log("Your current position is:");
        console.log(`Latitude : ${coordinate.latitude}`);
        console.log(`Longitude: ${coordinate.longitude}`);
        console.log(`More or less ${coordinate.accuracy} meters.`);
    }
    const errors = (error) => {
        console.warn(`ERROR(${error.code}): ${error.message}`);
    }
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
                heroSection1ButtonOnClick={handleDialogOpen}
            />
            <Dialog
                open={open}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Disagree</Button>
                    <Button onClick={handleLocationAvailability} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
            {(navigator.geolocation) ? null
                : <Alert style={{position:'fixed', bottom: 0}} severity="error">Sorry, Your device does not support find location!</Alert>
                }
        </div>
    );
}

export default App;
