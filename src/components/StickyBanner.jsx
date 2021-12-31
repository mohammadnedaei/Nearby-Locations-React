import {SpeakerphoneIcon, XIcon} from '@heroicons/react/outline';
import {useMemo, useState} from "react";

export default function StickyBanner(props) {
    const [show, setShow] = useState(true);
    const bannerPlace = useMemo(() => {
        return props.bannerFixedPlace == 'bottom' ? {
            bottom: 0
        } : {
            top:0
        }
    }, [])
    if (window.localStorage.getItem('seen_banner')) {
        return <></>
    }
        return (show ?
            <div style={{position:'fixed', width: '100%', ...props.bannerStyle, ...bannerPlace}} className={`bg-indigo-600 ${props.bannerBackground}`}>
                <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-indigo-800">
              <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true"/>
            </span>
                            <p className="ml-3 font-medium text-white truncate">
                                <span className="md:hidden">{props.bannerDescription}</span>
                                <span
                                    className="hidden md:inline">{props.bannerTitle} {props.bannerDescription}</span>
                            </p>
                        </div>
                        <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                            <a
                                onClick={props.bannerButtonOnClick}
                                href={props.bannerButtonUrl}
                                style={props.bannerButtonStyle}
                                className={`flex items-center justify-center py-2 px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50 ${props.bannerButtonClass}`}
                            >
                                {props.bannerButtonText}
                            </a>
                        </div>
                        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                            <button
                                onClick={() => {
                                    window.localStorage.setItem('seen_banner', true);
                                    setShow(false);
                                }}
                                type="button"
                                className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                            >
                                <span className="sr-only">Dismiss</span>
                                <XIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            : null);

}