import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Base from './components/base.js';
import ArtGallery from './components/artgallery.js';  


var test = <h1><a href="/" style={{textDecoration: 'none', color: 'white'}}>Madeline LeBarron Art</a></h1>;

var arte = <ArtGallery images={images_json}/>;

var page = <div>{test}<div style={{paddingLeft:"30px", paddingRight:"30px"}}><br/><br/><div>{arte}</div></div></div>

ReactDOM.render(<Base docked={true} open={true} content={page}/>, document.getElementById('react-base')); 
