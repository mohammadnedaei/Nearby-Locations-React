import * as React from "react";
import {useState} from "react";
import {AppBar, Button, Dialog, Skeleton, Slide, Toolbar, Typography} from "@mui/material";
import {ViewGridIcon} from "@heroicons/react/solid";
import CloseIcon from '@mui/icons-material/Close';
import './LocationPhotosGrid.css'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const placeholderImages = [
    'https://via.placeholder.com/1080x900.png?text=Loading...',
]
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const LocationPhotosGrid = (props) => {
    const [gallery, setGallery] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const handleGalleryOpen = () => {
        setGallery(true)
    }
    const handleGalleryClose = () => {
        setGallery(false)
    }

    return (
        <div>
            {props.photos == null ?
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="w-4_10 lg-w-1_2 md-w-1 mr-5">
                        <img className="mt-10 start-rounded md-end-rounded" alt="location"
                             src={placeholderImages[0]}/>
                    </div>
                    <div className="alternative-photos lg-w-1_2 w-4_10 md-visible">
                        <div className="w-1_2 lg-w-1 flex">
                            <img className="mt-10 mr-5 lg-end-rounded" alt="location" src={placeholderImages[0]}/>
                            <img className="lg-visible mt-10 top-end-rounded" alt="location"
                                 src={placeholderImages[0]}/>
                        </div>
                        <div className="lg-visible w-1_2 flex">
                            <img style={{marginRight: '20px'}} className="mt-10" alt="location"
                                 src={placeholderImages[0]}/>
                            <img className="mt-10 bottom-end-rounded" alt="location" src={placeholderImages[0]}/>
                        </div>
                    </div>
                </div>
                :
                <div>
                    {props.photos.length === 1 ?
                        <div>
                            <img width={1080} height={700} className="mt-10 rounded" alt="1080x700"
                                 src={props.photos[0]}/>
                        </div>
                        : null}
                    {props.photos.length === 2 ?
                        <div>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <img width={1080} height={900} className="mt-10 main-photo w-4_10 mr-5 start-rounded"
                                     alt="location"
                                     src={props.photos[0]}/>
                                <img width={1080} height={900} style={{width: "40%"}}
                                     className="mt-10 lg-visible end-rounded" alt="location"
                                     src={props.photos[1]}/>
                            </div>
                        </div>
                        : null}
                    {props.photos.length === 3 ?
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <div className="w-6_10 lg-w-1_2 md-w-1 mr-5">
                                <img width={1080} height={600} className="mt-10 start-rounded md-end-rounded"
                                     alt="location"
                                     src={props.photos[0]}/>
                            </div>
                            <div className="alternative-photos lg-w-1_2 w-3_10 md-visible">
                                <img width={1080} height={600} className="mt-10 lg-visible top-end-rounded"
                                     alt="location"
                                     src={props.photos[1]}/>
                                <img width={1080} height={600} className="mt-10 bottom-end-rounded lg-top-end-rounded"
                                     alt="location"
                                     src={props.photos[2]}/>
                            </div>
                        </div>
                        : null}
                    {props.photos.length === 4 ?
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <div className="w-6_10 lg-w-1_2 md-w-1 mr-5">
                                <img width={1080} height={700} className="mt-10 start-rounded md-end-rounded"
                                     alt="location"
                                     src={props.photos[0]}/>
                            </div>
                            <div className="alternative-photos lg-w-1_2 w-1_6 md-visible">
                                <img width={1080} height={700} className="mt-10 lg-visible top-end-rounded"
                                     alt="location"
                                     src={props.photos[1]}/>
                                <img width={1080} height={700} className="mt-10 lg-visible" alt="location"
                                     src={props.photos[2]}/>
                                <img width={1080} height={700} className="mt-10 bottom-end-rounded lg-top-end-rounded"
                                     alt="location"
                                     src={props.photos[3]}/>
                            </div>
                        </div>
                        : null}
                    {props.photos.length >= 5 ?
                        <div>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <div className="w-4_10 lg-w-1_2 md-w-1 mr-5">
                                    {loaded ? null :
                                        <Skeleton show="true" vanimation="wave" variant="rectangular"
                                                  style={{width: '100%', height: '100%'}}/>
                                    }
                                    <div style={loaded ? {} : {display: 'none'}}>
                                        <img
                                            onClick={handleGalleryOpen} width={1080} height={900}
                                            className="mt-10 start-rounded md-end-rounded" alt="location"
                                            src={props.photos[0]}
                                            onLoad={() => setLoaded(true)}
                                        />
                                        <Button style={{
                                            position: 'relative',
                                            bottom: '45px',
                                            left: '1%',
                                            backgroundColor: '#fff',
                                            color: '#000',
                                            textTransform: 'none'
                                        }}
                                                variant="contained"
                                                startIcon={<ViewGridIcon className="h-6 w-6" aria-hidden="true"/>}
                                                onClick={handleGalleryOpen}>
                                            Show all photos
                                        </Button>
                                    </div>
                                </div>
                                <div className="alternative-photos lg-w-1_2 w-4_10 md-visible">
                                    <div className="w-1_2 lg-w-1 flex">
                                        <img width={1080} height={900} className="mt-10 mr-5 lg-end-rounded"
                                             alt="location"
                                             src={props.photos[1]}/>
                                        <img width={1080} height={900} className="lg-visible mt-10 top-end-rounded"
                                             alt="location"
                                             src={props.photos[2]}/>
                                    </div>
                                    <div className="lg-visible w-1_2 flex">
                                        <img width={1080} height={900} style={{marginRight: '20px'}} className="mt-10"
                                             alt="location"
                                             src={props.photos[3]}/>
                                        <img width={1080} height={900} className="mt-10 bottom-end-rounded"
                                             alt="location"
                                             src={props.photos[4]}/>
                                    </div>
                                </div>
                            </div>
                        </div> : null}
                    <Dialog
                        fullScreen
                        open={gallery}
                        onClose={handleGalleryClose}
                        TransitionComponent={Transition}
                    >
                        <AppBar sx={{position: 'relative'}}>
                            <Toolbar>
                                <Button autoFocus color="inherit" onClick={handleGalleryClose}>
                                    <CloseIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                                </Button>
                                <Typography sx={{ml: 2, flex: 1}} variant="h6" component="div">
                                    {props.locationName}
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <div className="all-photos-lg-wrapper">
                            <Carousel
                                autoFocus={true}
                                dynamicHeight={true}
                                emulateTouch={true}
                                useKeyboardArrows={true}
                            >
                                {props.photos.map((data, currentItem) => (
                                    <div className="carousel-image-wrapper" key={data}>
                                        <img className="carousel-image" alt="carousel-slide"
                                             src={data}/>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div className="all-photos-sm-wrapper">
                            {props.photos.map(data => (
                                <img className="all-photos-sm"
                                     alt="location" src={data} key={data}/>
                            ))}
                        </div>
                    </Dialog>
                </div>
            }
        </div>
    )
}
export default LocationPhotosGrid