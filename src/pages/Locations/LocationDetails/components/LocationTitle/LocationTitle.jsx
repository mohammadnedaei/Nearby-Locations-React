import Gradient from "rgt";
import TextGradientColors from "../../../../../configs/TextGradientColors";
import {useMemo} from "react";
import './LocationTitle.css';

const LocationTitle = (props) => {
    const randomNumber = useMemo(() => {
        return Math.floor(Math.random() * 11);
    }, [])
    return (
        <div className="title-wrapper">
            <div>
                <h1
                    className="location-title text-3xl tracking-tight">
                    {randomNumber % 2 === 0 ?
                        <Gradient dir="left-to-right" from={TextGradientColors[randomNumber]}
                                  to={TextGradientColors[randomNumber + 1]}>
                            {props.title}
                        </Gradient>
                        :
                        <Gradient dir="left-to-right" from={TextGradientColors[randomNumber]}
                                  to={TextGradientColors[randomNumber - 1]}>
                            {props.title}
                        </Gradient>
                    }
                </h1>
                <span className="location-description">
                  {randomNumber % 2 === 0 ?
                      <Gradient dir="right-to-left" from={TextGradientColors[randomNumber]}
                                to={TextGradientColors[randomNumber + 1]}>
                          {props.description}
                      </Gradient>
                      :
                      <Gradient dir="right-to-left" from={TextGradientColors[randomNumber]}
                                to={TextGradientColors[randomNumber - 1]}>
                          {props.description}
                      </Gradient>
                  }
              </span>
            </div>
        </div>
    )
}
export default LocationTitle;