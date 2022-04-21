import PropTypes from "prop-types";
import WeatherDetails from "./WeatherDetails";

function FutureWeather({data, today}) {
    let previousDay = today;

    return (
        <div>
            <h1>Next days</h1>
            <table>
                <thead>
                    <tr>
                        <th>Weather</th>
                        <th>Temperature</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((entry) => {

                    let higher = entry.temperature >= previousDay;

                    previousDay = entry.temperature;
                    return (
                            <tr key={entry.id}>
                                <td>{entry.weather}</td>
                                <td>{entry.temperature}</td>
                                {
                                    higher
                                        ? <td><i className="material-icons red-text">arrow_upward</i></td>
                                        : <td><i className="material-icons blue-text">arrow_downward</i></td>
                                }
                            </tr>
                        )
                })}
                </tbody>
            </table>
        </div>

    )
}


export default FutureWeather;