import React from 'react';
import './FutureForecast.scss';

const FutureForecast = props => {
    const items = props.item.daily;
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return (
        <div className='future-forecast'>
            <div className="current-temp">
                <img src={`http://openweathermap.org/img/wn/${items[0].weather[0].icon}@2x.png`} alt="weather-icon" />
                <div className="current-temp__other">
                    <div className="current-temp__other__day">
                        {
                            days[new Date(items[0].dt * 1000).getDay()]
                        }
                    </div>
                    <div className="current-temp__other__temp">
                        <span>Day </span>
                        <div>
                            {
                                Math.round(items[0].feels_like.day)
                            }
                            &#176; C
                        </div>
                    </div>
                    <div className="current-temp__other__temp">
                        <span>Night </span>
                        <div>
                            {
                                Math.round(items[0].feels_like.night)
                            }
                            &#176; C
                        </div>
                    </div>
                </div>
            </div>
            <div className="weather-forecast">
                {
                    items.slice(1, 7).map((item, index) => (
                        <div className="weather-forecast__item" key={index}>
                            <div className="weather-forecast__item__day">
                                {
                                    days[new Date(item.dt * 1000).getDay()]
                                }
                            </div>
                            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather-icon" />
                            <div className="weather-forecast__item__temp">
                                <span>Day </span>
                                <div>
                                    {
                                        Math.round(item.feels_like.day)
                                    }
                                    &#176; C
                                </div>
                            </div>
                            <div className="weather-forecast__item__temp">
                                <span>Night </span>
                                <div>
                                    {
                                        Math.round(item.feels_like.day)
                                    }
                                    &#176; C
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FutureForecast
