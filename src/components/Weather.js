import React from 'react'

function Weather(props) {
  
  return (
    <div className="max-w-sm mx-auto">
      {props.weather.main.temp}
    </div>
  )
}

export default Weather
