import {Button, Skeleton} from "@mui/material";
import {useCallback, useState} from "react";

const HeroSection1Images = {
    img1: 'https://www.npg.org.uk/assets/images/Slideshows/food/571_restaurant_4.jpg',
    title1: 'Food Restaurant',
    img2: 'https://livingnomads.com/wp-content/uploads/2019/09/26/Where-should-I-go-in-London-Buckingham-Palace-25.jpg',
    title2: 'London Buckingham',
    img3: 'https://media-cdn.tripadvisor.com/media/photo-s/01/b2/ec/1b/luxor-las-vegas.jpg',
    title3: 'Luxor LV',
    img4: 'https://i.pinimg.com/564x/d0/d3/c1/d0d3c14bcbc45aa90ea02bdc03f02ea4.jpg',
    title4: 'Taj Mahal',
    img5: 'https://www.pandotrip.com/wp-content/uploads/2016/04/Horseshoe-Photo-by-Michael-Adonek-740x493.jpg',
    title5: 'Great Canyon',
    img6: 'https://i.pinimg.com/originals/c0/0b/b7/c00bb7fb90b0560b6eceaf116a89ff22.jpg',
    title6: 'Excalibur LV',
    img7: 'https://d37j6posq2fmgz.cloudfront.net/resources/5465,5,1,6,3,0/-4060-/20190510105127/dh-palmerston-north-nosh-restaurant-portrait-.jpeg',
    title7: 'Food Restaurant2'
}
const HeroSection1 = (props) => {
// const [isLoaded, setLoaded] = useState(false);
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
        setRecord({...record, [title] : true})
    }, [record])
    return (
        <div className="relative overflow-hidden" style={{height: '923px'}}>
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                    <div className="sm:max-w-lg mt-20">
                        <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                            {props.heroSection1Title}
                        </h1>
                        <p className="mt-8 text-2xl text-gray-500">
                            {props.heroSection1Description}
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                            >
                                <div className="mt-10 absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="mt-10 flex items-center space-x-6 lg:space-x-8">
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-56 h-80 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                                                {record.title1 ? null : (
                                                    <Skeleton animation="wave" variant="rectangular" style={{height: '100%'}}/>
                                                    )}
                                                    <img
                                                        style={record.title1 ? {} : {display: 'none'}}
                                                        src={HeroSection1Images.img1}
                                                        onLoad={() => onLoadChange("title1")}
                                                        alt={HeroSection1Images.title1}
                                                    className="w-full h-full object-center object-cover"
                                                    />
                                                    )}
                                            </div>
                                            <div className="w-56 h-80 rounded-lg overflow-hidden">
                                                {record.title2 ? null : (
                                                    <Skeleton animation="wave" variant="rectangular" style={{height: '100%'}}/>
                                                )}
                                                <img
                                                    style={record.title2 ? {} : {display: 'none'}}
                                                    src={HeroSection1Images.img2}
                                                    onLoad={() => onLoadChange("title2")}
                                                    alt={HeroSection1Images.title2}
                                                    className="w-full h-full object-center object-cover"
                                                />
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-56 h-80 rounded-lg overflow-hidden">
                                                {record.title3 ? null : (
                                                    <Skeleton animation="wave" variant="rectangular" style={{height: '100%'}}/>
                                                )}
                                                <img
                                                    style={record.title3 ? {} : {display: 'none'}}
                                                    src={HeroSection1Images.img3}
                                                    onLoad={() => onLoadChange("title3")}
                                                    alt={HeroSection1Images.title3}
                                                    className="w-full h-full object-center object-cover"
                                                />
                                                )}
                                            </div>
                                            <div className="w-56 h-80 rounded-lg overflow-hidden">
                                                {record.title4 ? null : (
                                                    <Skeleton animation="wave" variant="rectangular" style={{height: '100%'}}/>
                                                )}
                                                <img
                                                    style={record.title4 ? {} : {display: 'none'}}
                                                    src={HeroSection1Images.img4}
                                                    onLoad={() => onLoadChange("title4")}
                                                    alt={HeroSection1Images.title4}
                                                    className="w-full h-full object-center object-cover"
                                                />
                                                )}
                                            </div>
                                            <div className="w-56 h-80 rounded-lg overflow-hidden">
                                                {record.title5 ? null : (
                                                    <Skeleton animation="wave" variant="rectangular" style={{height: '100%'}}/>
                                                )}
                                                <img
                                                    style={record.title5 ? {} : {display: 'none'}}
                                                    src={HeroSection1Images.img5}
                                                    onLoad={() => onLoadChange("title5")}
                                                    alt={HeroSection1Images.title5}
                                                    className="w-full h-full object-center object-cover"
                                                />
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-56 h-80 rounded-lg overflow-hidden">
                                                {record.title6 ? null : (
                                                    <Skeleton animation="wave" variant="rectangular" style={{height: '100%'}}/>
                                                )}
                                                <img
                                                    style={record.title6 ? {} : {display: 'none'}}
                                                    src={HeroSection1Images.img6}
                                                    onLoad={() => onLoadChange("title6")}
                                                    alt={HeroSection1Images.title6}
                                                    className="w-full h-full object-center object-cover"
                                                />
                                                )}
                                            </div>
                                            <div className="w-56 h-80 rounded-lg overflow-hidden">
                                                {record.title7 ? null : (
                                                    <Skeleton animation="wave" variant="rectangular" style={{height: '100%'}}/>
                                                )}
                                                <img
                                                    style={record.title7 ? {} : {display: 'none'}}
                                                    src={HeroSection1Images.img7}
                                                    onLoad={() => onLoadChange("title7")}
                                                    alt={HeroSection1Images.title7}
                                                    className="w-full h-full object-center object-cover"
                                                />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Button onClick={props.heroSection1ButtonOnClick} size="large" color="warning" variant="contained">
                                {props.heroSection1ButtonText}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HeroSection1;