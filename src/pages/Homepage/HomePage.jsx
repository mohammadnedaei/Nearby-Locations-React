import HeroSection1 from "./components/HeroSection1";
import {useState} from "react";
import Banner from "../../components/Banner";
import {Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

const HomePage = () => {
    const heroSection1ButtonText = "Explore Locations";
    const [open, setOpen] = useState(false);
    const [dialog, setDialog] = useState(true);
    const [teach, setTeacher] = useState(false);
    const [grant, setGranted] = useState(false);
    const [prompt, setPrompt] = useState(false);
    const handleDialogOpen = () => {
        setOpen(true);
    }
    const handleDialogClose = () => {
        setOpen(false);
    }
    //TODO: useCallback()
    const handleLocationAvailability = () => {
        HeroSection1.heroSection1ButtonOnClick = {handleLocationAvailability}
        setOpen(false);
        setDialog(false);
        if (navigator.geolocation) {
            console.log("Device has Geolocation Availability");
            navigator.permissions.query({name: "geolocation"}).then((result) => {
                if (result.state === "granted") {
                    console.log(result.state);
                    navigator.geolocation.getCurrentPosition(success);
                    setTeacher(false);
                    setGranted(true);
                    setPrompt(false);
                } else if (result.state === "prompt") {
                    console.log(result.state);
                    navigator.geolocation.getCurrentPosition(success, errors, options);
                    setGranted(false);
                    setTeacher(false);
                    setPrompt(true);
                } else if (result.state === "denied") {
                    setDialog(true);
                    console.log(result.state);
                    setGranted(false);
                    setTeacher(true);
                    setPrompt(false);
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
                heroSection1ButtonText={heroSection1ButtonText}
                heroSection1ButtonOnClick={dialog ? handleDialogOpen : handleLocationAvailability}
            />
            {dialog ?
                <Dialog
                    open={open}
                    onClose={handleDialogClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Use device location service?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Let your device help us determine your location. This means sending
                            location data to our server.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleDialogClose}>Disagree</Button>
                        <Button onClick={handleLocationAvailability} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog> : null
            }
            {(navigator.geolocation) ? null
                :
                <Alert style={{position: 'fixed', bottom: 0}} severity="error">Sorry, Your device does not support find
                    location!</Alert>
            }
            {teach ?
                <Alert style={{position: 'fixed', bottom: 0}} severity="warning">Location permission denied by user.
                    Open site settings and approve permission to continue.</Alert> : null}
            {grant ? <Alert style={{position: 'fixed', bottom: 0}} severity="success">Location permission granted
                successfully!</Alert> : null}
            {prompt ? <Alert style={{position: 'fixed', bottom: 0}} severity="info">Grant permission and then click
                on {heroSection1ButtonText}. Waiting for permission pass...</Alert> : null}
        </div>
    )
}
export default HomePage;