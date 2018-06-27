import React from 'react'
import { get } from 'axios'
import ZipForm from './ZipForm';
import WeatherList from './WeatherList'
import CurrentDay from './CurrentDay'
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			zipcode:'',
			city : {},
			dates: [],
			selectedDate :null
		};
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onDayClicked = this.onDayClicked.bind(this);
	}

	onFormSubmit(zipcode) {
  		get(`http://localhost:3000/weather/${zipcode}`)
  		.then(({data}) => {
  			const {city, list:dates} = data;
  			this.setState({zipcode, city, dates, selectedDate:null});
  		} );
	}

	onDayClicked(dayIndex) {
		this.setState({ selectedDate:dayIndex });
	}

	render() {
		const {city, dates, selectedDate} = this.state;

		return (	
			<div className="app"> 	
					<ZipForm onSubmit={this.onFormSubmit}/>
					<WeatherList days={dates} onDayClicked={this.onDayClicked}/>
					{selectedDate!==null && <CurrentDay city={city} day={dates[selectedDate]}/>}
				</div> 
			);
	}
}

export default App;