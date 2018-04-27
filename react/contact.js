import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Base from './components/base.js';


var test = <h1><a href="/" style={{textDecoration: 'none', color: 'white'}}>Madeline LeBarron Art</a></h1>;


var body = <div style={{margin: 'auto', width: '50%', padding: '10px'}}>Follow me on <a style={{color: 'white'}} href="https://www.instagram.com/madelinelebarron/">Instagram</a></div>;  

var page = <div>{test}<div style={{paddingLeft:"30px", paddingRight:"30px"}}><br/><br/><div>{body}</div></div></div>;

ReactDOM.render(<Base docked={true} open={true} content={page}/>, document.getElementById('react-base')); 

