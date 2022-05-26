import * as React from 'react';
import LocationItem from "./components/LocationItem";
import {useEffect, useMemo, useState} from "react";
import {useLocation} from "react-router-dom";
import useLocationPhotos from "../../hook/useLocationPhotos";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Gradient from 'rgt'
import 'swiper/swiper.scss';
import './locationDetailsStyles.scss';
import {
    AppBar,
    Button,
    Dialog, Divider,
    IconButton,
    ListItem,
    ListItemText,
    Skeleton,
    Slide,
    Toolbar,
    Typography
} from "@mui/material";
import {List} from "@mui/icons-material";
import {ViewGridIcon} from "@heroicons/react/solid";
import {XIcon} from "@heroicons/react/outline";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const LocationDetails = () => {

    const randomNumber = useMemo(() => {
        return Math.floor(Math.random() * 11);
    },[])
    //TODO: properly skeleton for photos grid !important
    const gradientColors = useMemo(() => {
        return ['#004d4b',
            '#007CF0',
            '#00008b',
            '#9932cc',
            '#057e7c',
            '#620372',
            '#2cbdf7',
            '#5d0dac',
            '#010864',
            '#004e92',
            '#6441A5',
            '#42106e']
    }, [])
    const sampleImage = [
        'https://via.placeholder.com/1080x900.png?text=Loading...',
        'https://via.placeholder.com/1080x700.png?text=No image is provided for this location :('
    ]

    const {state} = useLocation();
    const { location, locationName, locationId } = state;
    const {requestCallback, locationPhotos} = useLocationPhotos()
        useEffect(() => {
            if (locationPhotos == null) {
                requestCallback(locationId);
            }
        },[locationPhotos])
console.log(randomNumber)
    console.log(locationPhotos)
    const [gallery, setGallery] = useState(false)
    const handleGalleryOpen = () => {
        setGallery(true)
    }
    const handleGalleryClose = () => {
        setGallery(false)
    }
return (
  <div style={{display:'flex', alignItems:'center', flexDirection:'column'}} className="page">
      <div style={{display:'flex' , flexDirection:'row'}}>
          <div>
            <h1 style={{marginTop: 25, marginBottom: 5}} className="location-title text-2xl font font-extrabold tracking-tight text-gray-900">
                {randomNumber % 2 == 0 ?
                    <Gradient dir="left-to-right" from={gradientColors[randomNumber]} to={gradientColors[randomNumber+1]}>
                        {locationName}
                    </Gradient>
                    :
                    <Gradient dir="left-to-right" from={gradientColors[randomNumber]} to={gradientColors[randomNumber-1]}>
                        {locationName}
                    </Gradient>
                }

            </h1>
              <span>
                  {randomNumber % 2 == 0 ?
                      <Gradient dir="right-to-left" from={gradientColors[randomNumber]} to={gradientColors[randomNumber+1]}>
                          {location.region + "," ?? ''} {location.country ?? ''}
                      </Gradient>
                      :
                      <Gradient dir="right-to-left" from={gradientColors[randomNumber]} to={gradientColors[randomNumber-1]}>
                          {location.region + "," ?? ''} {location.country ?? ''}
                      </Gradient>
                  }
              </span>

          </div>
      </div>
      {locationPhotos == null ?
          <div>
              <div style={{display:'flex', justifyContent:'center'}}>
                  <div className="w-4_10 lg-w-1_2 md-w-1 mr-5">
                      <img className="mt-10 start-rounded md-end-rounded" alt = "1080x900" src={sampleImage[0]}/>
                  </div>
                  <div className="alternative-photos lg-w-1_2 w-4_10 md-visible">
                      <div className="w-1_2 lg-w-1 flex">
                          <img className="mt-10 mr-5 lg-end-rounded" alt = "1080x900" src={sampleImage[0]} />
                          <img className="lg-visible mt-10 top-end-rounded" alt = "1080x900" src={sampleImage[0]} />
                      </div>
                      <div className="lg-visible w-1_2 flex">
                          <img style={{marginRight: '20px'}} className="mt-10" alt = "1080x900" src={sampleImage[0]} />
                          <img className="mt-10 bottom-end-rounded" alt = "1080x900" src={sampleImage[0]} />
                      </div>
                  </div>
              </div>
          </div>
          :
      <div>
          {locationPhotos.length === 0 ?
              <div>
                  <img className="mt-10 rounded" alt ="1080x700" src={sampleImage[1]}/>
              </div>
              : null }
          {locationPhotos.length === 1 ?
             <div>
                 <img className="mt-10 rounded" alt ="1080x700" src={locationPhotos[0].prefix + "1080x700" + locationPhotos[0].suffix}/>
             </div>
             : null }
          {locationPhotos.length === 2 ?
              <div>
                      <div style={{display:'flex', justifyContent: 'center'}}>
                          <img  className="mt-10 main-photo w-4_10 mr-5 start-rounded" alt = "1080x900" src={locationPhotos[0].prefix + "1080x900" + locationPhotos[0].suffix}/>
                          <img style={{width: "40%"}} className="mt-10 lg-visible end-rounded" alt = "1080x900" src={locationPhotos[1].prefix + "1080x900" + locationPhotos[1].suffix}/>
                      </div>
              </div>
              : null }
          {locationPhotos.length === 3 ?
              <div style={{display:'flex', justifyContent: 'center'}}>
                  <div className="w-6_10 lg-w-1_2 md-w-1 mr-5">
                      <img className="mt-10 start-rounded md-end-rounded" alt = "1080x900" src={locationPhotos[0].prefix + "1080x600" + locationPhotos[0].suffix}/>
                  </div>
                  <div className="alternative-photos lg-w-1_2 w-3_10 md-visible">
                      <img className="mt-10 lg-visible top-end-rounded" alt = "1080x900" src={locationPhotos[1].prefix + "1080x600" + locationPhotos[1].suffix}/>
                      <img className="mt-10 bottom-end-rounded lg-top-end-rounded" alt = "1080x900" src={locationPhotos[2].prefix + "1080x600" + locationPhotos[2].suffix}/>
                  </div>
              </div>
              : null }
          {locationPhotos.length === 4 ?
              <div style={{display:'flex', justifyContent: 'center'}}>
                  <div className="w-6_10 lg-w-1_2 md-w-1 mr-5">
                      <img className="mt-10 start-rounded md-end-rounded" alt = "1080x900" src={locationPhotos[0].prefix + "1080x700" + locationPhotos[0].suffix}/>
                  </div>
                  <div className="alternative-photos lg-w-1_2 w-1_6 md-visible">
                      <img className="mt-10 lg-visible top-end-rounded" alt = "1080x900" src={locationPhotos[1].prefix + "1080x700" + locationPhotos[1].suffix}/>
                      <img className="mt-10 lg-visible" alt = "1080x900" src={locationPhotos[2].prefix + "1080x700" + locationPhotos[2].suffix}/>
                      <img className="mt-10 bottom-end-rounded lg-top-end-rounded" alt = "1080x900" src={locationPhotos[3].prefix + "1080x700" + locationPhotos[3].suffix}/>
                  </div>
              </div>
              : null }
        {locationPhotos.length >= 5 ?
        <div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <div className="w-4_10 lg-w-1_2 md-w-1 mr-5">
                    <img onClick={handleGalleryOpen} className="mt-10 start-rounded md-end-rounded" alt = "1080x900" src={locationPhotos[0].prefix + "1080x900" + locationPhotos[0].suffix}/>
                    <Button style={{position:'relative', bottom:'10%',left:'1%', backgroundColor:'#fff', color:'#000', textTransform: 'none'}}
                            variant="contained"  startIcon={<ViewGridIcon className="h-6 w-6" aria-hidden="true" />} onClick={handleGalleryOpen}>
                        Show all photos
                    </Button>
                </div>
                <div className="alternative-photos lg-w-1_2 w-4_10 md-visible">
                    <div className="w-1_2 lg-w-1 flex">
                        <img className="mt-10 mr-5 lg-end-rounded" alt = "1080x900" src={locationPhotos[1].prefix + "1080x900" + locationPhotos[1].suffix}/>
                        <img className="lg-visible mt-10 top-end-rounded" alt = "1080x900" src={locationPhotos[2].prefix + "1080x900" + locationPhotos[2].suffix}/>
                    </div>
                    <div className="lg-visible w-1_2 flex">
                        <img style={{marginRight: '20px'}} className="mt-10" alt = "1080x900" src={locationPhotos[3].prefix + "1080x900" + locationPhotos[3].suffix}/>
                        <img className="mt-10 bottom-end-rounded" alt = "1080x900" src={locationPhotos[4].prefix + "1080x900" + locationPhotos[4].suffix}/>
                    </div>
                </div>
            </div>
        </div> : null}
      </div>}
      <Dialog
          fullScreen
          open={gallery}
          onClose={handleGalleryClose}
          TransitionComponent={Transition}
      >
          <AppBar sx={{ position: 'relative' }}>
              <Toolbar>
                  <Button autoFocus color="inherit" onClick={handleGalleryClose}>
                      <XIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                  </Button>
                  <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                      {locationName}
                  </Typography>
              </Toolbar>
          </AppBar>
          <List>
              <ListItem button>
                  <ListItemText primary="Phone ringtone" secondary="Titania" />
              </ListItem>
          </List>
      </Dialog>
  </div>
)
}
export default LocationDetails;
