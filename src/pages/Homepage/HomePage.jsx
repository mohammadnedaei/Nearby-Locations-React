import {useState} from "react";
import {Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {useNavigate} from "react-router-dom";
import './HomePage.css';
import Hero from "./components/Hero";
import iOSChrome from "../../configs/agents/iOSChrome";
import iOS from "../../configs/agents/iOS";
import Safari from "../../configs/agents/Safari";

const HomePage = () => {
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
    const handleLocationAvailability = () => {
        Hero.HeroButtonOnClick = {handleLocationAvailability}
        setOpen(false);
        setDialog(false);
        if (navigator.geolocation) {
            if (Safari || iOS || iOSChrome) {
                navigator.geolocation.getCurrentPosition(success, errors, options);
            }
            if (navigator.userAgent.includes('wv')) {
                navigator.geolocation.getCurrentPosition(success, errors, options);
            }
            navigator.permissions.query({name: "geolocation"}).then((result) => {
                if (result.state === "granted") {
                    navigator.geolocation.getCurrentPosition(success);
                    setTeacher(false);
                    setGranted(true);
                    setPrompt(false);
                } else if (result.state === "prompt") {
                    navigator.geolocation.getCurrentPosition(success, errors, options);
                    setGranted(false);
                    setTeacher(false);
                    setPrompt(true);
                } else if (result.state === "denied") {
                    setDialog(true);
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
        maximumAge: 1
    }
    const navigate = useNavigate();
    const success = (pos) => {
        let coordinate = pos.coords;
        navigate("/locations");
    }
    const errors = (error) => {
        console.warn(`ERROR(${error.code}): ${error.message}`);
    }
    return (
        <div>
            <Hero
                heroTitle={"Find nearby locations easily"}
                heroDescription={"A public service to explore your current nearby locations as fast as possible." +
                    " Even more, find your nearby locations details."}
                HeroButtonText={"Explore Locations"}
                HeroButtonOnClick={dialog ? handleDialogOpen : handleLocationAvailability}
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
                <Alert className="default-font font-400 alert" severity="error">Sorry,
                    Your device does not support <em>location services!</em></Alert>
            }
            {teach ?
                <Alert className="default-font font-400 alert" severity="warning">Location
                    permission denied by user.
                    Open site settings and approve permission to continue.</Alert> : null}
            {grant ? <Alert className="default-font font-400 alert" severity="success">Location
                permission granted
                successfully! Finding places...</Alert> : null}
            {prompt ?
                <Alert className="default-font font-400 alert" severity="info">Grant
                    permission and then
                    click
                    on <em>Explore Locations</em>. Waiting for permission pass...</Alert> : null}
        </div>
    )
}
export default HomePage;
