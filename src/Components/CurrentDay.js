import React from 'react';

class CurrentDay extends React.Component {
	render() {

		const { city, day:{temp, weather, pressure, humidity, speed, deg} } = this.props;
		const w = weather[0];

		return (
			<div class = "current-day"> 
				<h1 className="day-header">{city.name}</h1>
				<div className="weather"> 
					<p> 
						<img src={`http://openweathermap.org/img/w/${w.icon}.png`} alt={w.description}/>
						{w.description}
					</p>
				</div>
				<div className="details flex-parent"> 
					<div className="temperature-breakdown"> 
						<p>Morning temp : {temp.morn}&deg;F</p>
						<p>Day temp : {temp.day}&deg;F</p>
						<p>Evening temp: {temp.eve}&deg;F</p>
						<p>Night temp: {temp.night}&deg;F</p>
					</div>
					<div className="misc-details">
						<p> Atmosphere pressure: {pressure} hPa </p>
						<p>Humidity : {humidity}% </p>
						<p>Wind Speed : {speed} mph </p>
					</div>
				</div>
			</div>

			);

	}
}

export default CurrentDay;