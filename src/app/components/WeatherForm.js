import React from 'react';

const WeatherForm = props =>(
  <div className="card card-body">
  <form onSubmit={props.getWeather}>
    <div className="form-group">
     <input type="text" name="city" placeholder="your city Name" className="form-control" autoFocus/>
    </div>
    <div className="form-group">
     <input type="text" name="country" placeholder="your country Name" className="form-control" autoFocus/>
    </div>
    <button className="btn btn-success btn-block">Get Wheather</button>
  </form>
  </div>  
);

export default WeatherForm;