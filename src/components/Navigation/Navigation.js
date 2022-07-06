import React from 'react';



const Navigation=({onRouteChange,issignedin})=>{
	if(issignedin){
		return(
		<nav style={{display:'flex',justifyContent:'flex-end'}}>
			<p onClick={()=>onRouteChange('signout')} className='f3 dim dark-blue underline pointer pa3 link'>Sign out</p>
		</nav>
		);
	} else {
	
	return (
		<nav style={{display:'flex',justifyContent:'flex-end'}}>
			<p onClick={()=>onRouteChange('signin')} className='f3 dim dark-blue underline pointer pa3 link'>Sign in</p>
			<p onClick={()=>onRouteChange('register')} className='f3 dim dark-blue underline pointer pa3 link'>Register</p>
		</nav>
		);
	}
}

export default Navigation;