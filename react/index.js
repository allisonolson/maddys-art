import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Base from './components/base.js'; 


var test = <h1 style={{textAlign: 'center', color: 'white', fontFamily:'Inconsolata, monospace'}}>Madeline LeBarron Art</h1>;

ReactDOM.render(<Base docked={true} open={true} content={test}/>, document.getElementById('react-base')); 
