import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Base from './components/base.js';
import ArtGallery from './components/artgallery.js';  


var test = <h1 style={{textAlign: 'center', color: 'white', fontFamily:'Inconsolata, monospace'}}>Madeline LeBarron Art</h1>;

console.log(images_json); 

var arte = <ArtGallery images={images_json}/>;

var page = <div>{test}<div style={{paddingLeft:"30px", paddingRight:"30px"}}><br/><br/><div>{arte}</div></div></div>

ReactDOM.render(<Base docked={true} open={true} content={page}/>, document.getElementById('react-base')); 
