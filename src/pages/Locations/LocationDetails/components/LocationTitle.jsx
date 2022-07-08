import Gradient from "rgt";
import TextGradientColors from "../../../../configs/TextGradientColors";
import * as React from "react";
import {useMemo} from "react";

const LocationTitle = (props) => {
    const randomNumber = useMemo(() => {
        return Math.floor(Math.random() * 11);
    }, [])
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div>
                <h1 style={{marginTop: 25, marginBottom: 5}}
                    className="location-title text-2xl font font-extrabold tracking-tight text-gray-900">
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
                <span>
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
export default LocationTitle