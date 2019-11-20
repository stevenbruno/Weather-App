import React from 'react';

function App() {
  return (
    <React.Fragment>
      <header className="h-16 bg-gray-300 fixed top-0 w-full">
      </header>
      <main className="flex flex-auto mt-24 md:mt-32">
        <form class="md:w-full max-w-sm mx-auto">
          <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input 
              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-gray-700" 
              type="text" 
              placeholder="Search city" 
              aria-label="Full name">
            </input>
            <button class="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Search
            </button>
          </div>
        </form>
      </main>
      <footer className="h-16 bg-gray-300 fixed bottom-0 w-full">
      </footer>
    </React.Fragment>
  );
}

export default App;
