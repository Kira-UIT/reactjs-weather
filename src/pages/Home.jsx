import React, { useEffect, useState } from 'react';
import CurrentInfo from '../components/CurrentInfo/CurrentInfo';
import FutureForecast from '../components/FutureForecast/FutureForecast';

import forecastApi from '../api/forecastApi';

const Home = () => {
    const [items, setItems] = useState([]);
    const location = {
        lat: '21.028511',
        lon: '105.804817'
    }

    const params = {
        lat: '21.028511',
        lon: '105.804817',
        exclude: 'hourly,minutely',
        units: 'metric'
    }

    useEffect(() => {
        const getForecast = async () => {
            try {
                const response = await forecastApi.get(params);
                setItems(response);
            }
            catch (e) {
                console.log('Failed to fetch data: ', e);
            }
        }
        getForecast();
    }, []);
    return (
        <div>
            <div className='container'>
                {
                    items.current && items.daily && (
                        <>
                            <CurrentInfo item={items}/>
                            <FutureForecast item={items}/>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Home
