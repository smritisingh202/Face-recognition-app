import React from 'react';
import './Imagelink.css';


const Imagelink=({onInputChange,onButtonSubmit})=>{
	return (
		<div className='f3 center'>
			<p>{'Welcome to Face recognition app!! Drop a single face image below in jpg format for face-detection'}</p>
			<div className='br-2 shadow-3 pa5 w-50 center ma4 br4 pattern'>
				<input type="text" className='f4 shadow-2 w-80 center' onChange={onInputChange}/>
				<button className="shadow-3 grow white button ph3 center" onClick={onButtonSubmit} >Detect</button>
			</div>
		</div>
		
		);
}

export default Imagelink;