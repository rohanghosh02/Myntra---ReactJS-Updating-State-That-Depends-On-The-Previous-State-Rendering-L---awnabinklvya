import React from 'react'
import '../styles/App.css';
import Content from './Content';
import Filters from './Filters';
import Navbar from './Navbar';

const App = () => {

  return (
    <div id="main">
      <Navbar/>
      
      <Filters/>
      <Content/>

     
      
    </div>
  )
}


export default App;
