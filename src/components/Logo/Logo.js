import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
import logo from './face-detection.png';

const Logo=()=>{
	return (
		<div className='pl4 pv3' >
			<Tilt className="Tilt br-2 shadow-3" options={{ max : 40 }} style={{ height: 150, width: 150 }} >
			 <div className="Tilt-inner pa4"> <img src={logo} alt="logo"></img></div>
			</Tilt>
		</div>
		);
}

export default Logo;