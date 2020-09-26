import React, { useState, useEffect } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './Login';
import './App.css';

const spotify = new SpotifyWebApi();

const App = () => {
	const [token, setToken] = useState(null);

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = '';
		const _token = hash.access_token;
		console.log('tokeeen :point👉', _token);

		if (_token) {
			setToken(_token);
			spotify.setAccessToken(_token);
			spotify.getMe().then((user) => {
				console.log('person', user);
			});
		}
	}, []);

	return (
		<div className='app'>
			{token ? <h1> I am logged In</h1> : <Login />}
		</div>
	);
};

export default App;
