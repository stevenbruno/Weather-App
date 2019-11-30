import React, { useState } from 'react';
import Weather from './components/Weather';
import Axios from 'axios';

function App() {
  
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('');
  const [isSubmitted ,setIsSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=3ab92d85d7f9573a3fe27982129c7bde`)
    .then(res => {
      setWeather(res.data);
      setIsSubmitted(true);
    })
  }

  
  return (
    <React.Fragment>
      <header className="h-16 bg-gray-300 fixed top-0 w-full">
      </header>
      <main className="flex flex-col mt-24 md:mt-32">
        <form onSubmit={onSubmit} className="md:w-full max-w-sm mx-auto">
          <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input 
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-gray-700" 
              type="text" 
              placeholder="Search city" 
              aria-label="Full name"
              onChange={(e) => setCity(e.target.value)}>
            </input>
            <button 
              type="submit"
              className="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Search
            </button>
          </div>
        </form>
        {isSubmitted ? <Weather weather={weather} /> : null}
      </main>
      <footer className="h-16 bg-gray-300 fixed bottom-0 w-full">
      </footer>
    </React.Fragment>
  );
}

export default App;
