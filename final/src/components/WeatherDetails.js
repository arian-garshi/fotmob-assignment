import {useState} from "react";
import PropTypes from 'prop-types';

function WeatherDetails({data}) {
    const [showingMore, setShowingMore] = useState(false)

    return (
        <div>
            <ul className="collection">
                <li className="collection-item">Location: {data.location}</li>
                <li className="collection-item">Weather: {data.weather}</li>
                <li className="collection-item">Temperature: {data.temperature}</li>
                <li className="collection-item">Minimum Temperature: {data.minTemp}</li>
                <li className="collection-item">Maximum Temperature: {data.maxTemp}</li>

                {
                    showingMore ?
                        <>
                            <li className="collection-item">Wind Direction: {data.windDirection}</li>
                            <li className="collection-item">Wind Speed: {data.windSpeed}</li>
                            <li className="collection-item">Humidity: {data.humidity}</li>
                        </>
                        :
                        <></>
                }

            </ul>
            <input className="btn waves-effect waves-light" type="button" value={
                showingMore
                    ? "Show less"
                    : "show more"
            } onClick={()=>setShowingMore(!showingMore)}>

            </input>
        </div>

    )
}

export default WeatherDetails;


