import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/Searchbar';

function App() {
  return (
    <div className="h-screen w-full text-white font-helvetica-now-display">
      <Navbar />
      <SearchBar/>
    </div>
  );
}

export default App;