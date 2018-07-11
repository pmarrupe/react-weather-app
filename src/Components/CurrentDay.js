import React from 'react';

const CurrentDay = ({ city, day:{temp, weather, pressure, humidity, speed, deg} }) => 
	<div class = "current-day"> 
				<h1 className="day-header">{city.name}</h1>
				<div className="weather"> 
					<p> 
						<img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt={weather[0].description}/>
						{weather[0].description}
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

export default CurrentDay;