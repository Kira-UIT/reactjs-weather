import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import './CurrentInfo.scss';

const CurrentInfo = props => {
    const item = props.item;
    const [time, setTime] = useState(new Date());

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    useEffect(() => {
        const timeID = setInterval(() => {
            setTime(preState => new Date);
        }, 1000);
        return () => {
            clearInterval(timeID);
        }
    }, [time]);

    return (
        <div className='current-info'>
            <div className="date-container">
                <div className="date-container__time">
                    {
                        time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                    }
                </div>
                <div className="date-container__date" id="date">
                    {
                        days[time.getDay()] + ", " + time.getDate() + " " + months[time.getMonth() - 1]
                    }
                </div>
                <div className="date-container__other">
                    <div className="date-container__other__item">
                        <div>Humidity</div>
                        <div>
                            {
                                item.current.humidity + " %"
                            }
                        </div>
                    </div>
                    <div className="date-container__other__item">
                        <div>Pressure</div>
                        <div>
                            {
                                item.current.pressure
                            }
                            <span> hPa</span>
                        </div>
                    </div>
                    <div className="date-container__other__item">
                        <div>Wind Speed</div>
                        <div> 
                            {
                                item.current.wind_speed
                            } 
                            <span> m/s</span></div>
                    </div>
                    <div className="date-container__other__item">
                        <div>Sunrise</div>
                        <div>
                            <Moment unix format='HH:mm a'>
                                {
                                    item.current.sunrise
                                }
                            </Moment>
                        </div>
                    </div>
                    <div className="date-container__other__item">
                        <div>Sunset</div>
                        <div>
                            <Moment unix format='HH:mm a'>
                                {
                                    item.current.sunset
                                }
                            </Moment>
                        </div>
                    </div>
                </div>
            </div>
            <div className="place-container">
                <div className="time-zone">
                    {
                        item.timezone
                    }
                </div>
                <div className="country">
                    {
                        item.lat + 'N ' + item.lon + 'E'
                    }
                </div>
            </div>
        </div>
    )
}


export default CurrentInfo
