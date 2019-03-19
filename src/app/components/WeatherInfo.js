import React from 'react';

const WheatherInfo = props => {
    return (
        <div>
        {
            props.error &&
            <div className="alert alert-danger">
             <p>
              {props.error}
             </p>
            </div>
        }
        {
            props.temperature ?
            <div className="card card-body">
                <p>
                    Location : {props.city} ({props.country})
                </p>
                <p>
                    Temperature : {props.temperature}ºC, {props.description}
                </p>
                <p>
                    Humidity : {props.humidity}%
                </p>
                <p>
                    Wind speed : {props.wind_speed} knots
                </p>
            </div>
            :
            <div className="card card-body">
                <p>
                    Not request yet
                </p>
            </div>
        }
        </div>
        
    );
}

export default WheatherInfo;