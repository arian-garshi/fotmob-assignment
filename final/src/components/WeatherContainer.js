import {useEffect, useState} from "react";
import WeatherDetails from "./WeatherDetails";
import FutureWeather from "./FutureWeather";

function WeatherContainer() {

    const [todaysWeather, setTodaysWeather] = useState({});
    const [nextDays, setNextDays] = useState([]);
    const [woeid, setWoeid] = useState("44418");

    useEffect(() => {
        fetch(`https://www.metaweather.com/api/location/${woeid}/`)
            .then(result => {
                return result.json();
            })
            .then(jsonData => {
                const today = jsonData.consolidated_weather[0];
                let todaysResults = {
                    'location' : jsonData.title,
                    'weather' : today.weather_state_name,
                    'temperature' : today.the_temp,
                    'minTemp' : today.min_temp,
                    'maxTemp' : today.max_temp,
                    'windDirection' : today.wind_direction,
                    'windSpeed' : today.wind_speed,
                    'humidity' : today.humidity
                }
                setTodaysWeather(todaysResults);

                let nextDaysData = [];
                for (let i = 1; i < jsonData.consolidated_weather.length; ++i) {
                    let entry = {
                        'id' : jsonData.consolidated_weather[i].id,
                        'weather' : jsonData.consolidated_weather[i].weather_state_name,
                        'temperature' : jsonData.consolidated_weather[i].the_temp
                    }
                    nextDaysData.push(entry);
                }
                setNextDays(nextDaysData);
            })
            .catch(error => console.log('Error: could not fetch the data'));
    }, [woeid])

    return(
        <>
            <h1>{todaysWeather.location}</h1>
            <WeatherDetails data={todaysWeather}/>
            <FutureWeather
                data={nextDays}
                today={todaysWeather.temperature}
            />
        </>
    )
}

export default WeatherContainer;