import './ScrollToTop.css';
import {ArrowCircleUpIcon} from "@heroicons/react/solid";
import {useEffect, useState} from "react";
import $ from "jquery"

const ScrollToTop = () => {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 250) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        });
    })
    return (
        <div className={scroll ? 'fade-in' : 'fade-out'}>
            <div onClick={() => {
                window.scrollTo({top: 0, behavior: 'smooth'});
            }} className="back-to-top">
                <ArrowCircleUpIcon className="h-12 w-12 text-white m-auto" aria-hidden="true"/>
            </div>
        </div>
    )
}
export default ScrollToTop