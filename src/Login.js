import React from 'react';
import './Login.css';

const Login = () => {
	return (
		<div className='login'>
			<img
				src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
				alt=''
			/>

			<a href='https://accounts.spotify.com/en/login/?continue=https:%2F%2Fwww.spotify.com%2Fapi%2Fgrowth%2Fl2l-redirect&_locale=en-US'>
				LOGIN WITH SPOTIFY
			</a>
		</div>
	);
};

export default Login;
