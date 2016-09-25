import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js'

const API_KEY = 'AIzaSyBF7nfopTuUYnVH3vk1oZffcCMagDzwxI0'

const App = () => {
  return <div>
   <SearchBar/>
   </div>;
}


ReactDOM.render(<App />, document.querySelector('.container'))