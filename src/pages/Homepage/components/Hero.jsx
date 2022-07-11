import {Button, Skeleton} from "@mui/material";
import {useCallback, useState} from "react";
import './Hero.css';

const HeroImages = {
    img1: "https://picsum.photos/id/520/224/320",
    title1: "Location 1",
    img2: "https://picsum.photos/id/1015/224/320",
    title2: "Location 2",
    img3: "https://picsum.photos/id/158/224/320",
    title3: "Location 3",
    img4: "https://picsum.photos/id/193/224/320",
    title4: "Location 4",
    img5: "https://picsum.photos/id/195/224/320",
    title5: "Location 5",
    img6: "https://picsum.photos/id/1039/224/320",
    title6: "Location 6",
    img7: "https://picsum.photos/id/411/224/320",
    title7: "Location 7"
}
const Hero = (props) => {
    const [record, setRecord] = useState({
        title1: false,
        title2: false,
        title3: false,
        title4: false,
        title5: false,
        title6: false,
        title7: false
    })
    const onLoadChange = useCallback((title) => {
        setRecord({...record, [title]: true})
    }, [record])
    return (
        <div className="hero-wrapper relative overflow-hidden">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                    <div className="sm:max-w-lg mt-20">
                        <h1 className="text-4xl font tracking-tight text-gray-900 sm:text-6xl">
                            {props.heroTitle}
                        </h1>
                        <p className="mt-8 text-2xl text-gray-500">
                            {props.heroDescription}
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                            >
                                <div
                                    className="mt-10 absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="mt-10 flex items-center space-x-6 lg:space-x-8">
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div
                                                className="w-56 h-80 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                                                {record.title1 ? null : (
                                                    <Skeleton animation="wave"
                                                              variant="rectangular" style={{height: '100%'}}/>
                                                )}
                                                <img
                                                    style={record.title1 ? {} : {display: 'none'}}
                                                    src={HeroImages.img1}
                                                    onLoad={() => onLoadChange("title1")}
                                                    alt={HeroImages.title1}
                                                    className="w-full h-full object-center object-cover"
                                                />
                                                )}
                                            </div>
                                            <div className="w-56 h-80 rounded-lg overflow-hidden">
                                                {record.title2 ? null : (
                                                    <Skeleton animation="wave" variant="rectangular"
                                                              style={{height: '100%'}}/>
                                                )}
                                                <img
                                                    style={record.title2 ? {} : {display: 'none'}}
                                                    src={HeroImages.img2}
                                                    onLoad={() => onLoadChange("title2")}
                                                    alt={HeroImages.title2}
                                                    className="w-full h-full object-center object-cover"
                                                />
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-56 h-80 rounded-lg overflow-hidden">
                                                {record.title3 ? null : (
                                                    <Skeleton animation="wave" variant="rectangular"
                                                              style={{height: '100%'}}/>
                                                )}
                                                <img
                                                    style={record.title3 ? {} : {display: 'none'}}
                                                    src={HeroImages.img3}
                                                    onLoad={() => onLoadChange("title3")}
                                                    alt={HeroImages.title3}
                                                    className="w-full h-full object-center object-cover"
                                                />
                                                )}
                                            </div>
                                            <div className="w-56 h-80 rounded-lg overflow-hidden">
                                                {record.title4 ? null : (
                                                    <Skeleton animation="wave" variant="rectangular"
                                                              style={{height: '100%'}}/>
                                                )}
                                                <img
                                                    style={record.title4 ? {} : {display: 'none'}}
                                                    src={HeroImages.img4}
                                                    onLoad={() => onLoadChange("title4")}
                                                    alt={HeroImages.title4}
                                                    className="w-full h-full object-center object-cover"
                                                />
                                                )}
                                            </div>
                                            <div className="w-56 h-80 rounded-lg overflow-hidden">
                                                {record.title5 ? null : (
                                                    <Skeleton animation="wave" variant="rectangular"
                                                              style={{height: '100%'}}/>
                                                )}
                                                <img
                                                    style={record.title5 ? {} : {display: 'none'}}
                                                    src={HeroImages.img5}
                                                    onLoad={() => onLoadChange("title5")}
                                                    alt={HeroImages.title5}
                                                    className="w-full h-full object-center object-cover"
                                                />
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-56 h-80 rounded-lg overflow-hidden">
                                                {record.title6 ? null : (
                                                    <Skeleton animation="wave" variant="rectangular"
                                                              style={{height: '100%'}}/>
                                                )}
                                                <img
                                                    style={record.title6 ? {} : {display: 'none'}}
                                                    src={HeroImages.img6}
                                                    onLoad={() => onLoadChange("title6")}
                                                    alt={HeroImages.title6}
                                                    className="w-full h-full object-center object-cover"
                                                />
                                                )}
                                            </div>
                                            <div className="w-56 h-80 rounded-lg overflow-hidden">
                                                {record.title7 ? null : (
                                                    <Skeleton animation="wave" variant="rectangular"
                                                              style={{height: '100%'}}/>
                                                )}
                                                <img
                                                    style={record.title7 ? {} : {display: 'none'}}
                                                    src={HeroImages.img7}
                                                    onLoad={() => onLoadChange("title7")}
                                                    alt={HeroImages.title7}
                                                    className="w-full h-full object-center object-cover"
                                                />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Button onClick={props.HeroButtonOnClick} size="large" color="warning"
                                    variant="contained">
                                {props.HeroButtonText}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hero;