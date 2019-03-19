import React, {Component} from 'react';

import WeatherKey from './keys.js';
import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';

class App extends Component{

    state = {
        temperature: '',
        description:'',
        wind_speed:'',
        humidity:'',
        city:'',
        country:'',
        error: null

    }
    getWeather = async e =>{
        e.preventDefault();
        const {city, country} = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;
        if(cityValue && countryValue){
            const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WeatherKey.WEATHER_KEY}&units=metric`;
            const response = await fetch(API_URL);
            let data = await response.json();
            this.setState({
                temperature: data.main.temp,
                description:data.weather[0].description,
                wind_speed:data.wind.speed,
                humidity: data.main.humidity,
                city: data.name,
                country:data.sys.country,
                error: null
            });
        }else{
            this.setState({error:'Please insert a city and a Country'})
        }
        
    }

    render(){
        return (
        <div className="container p-4">
         <div className="row">
          <div className="col-md-4 mx-auto">
           <WeatherForm getWeather={this.getWeather}/>
           <WeatherInfo {...this.state}/>
          </div>
         </div>
        </div>
        );
    };
}

export default App;