export const authEndPoint = 'https://accounts.spotify.com/authorize';

const redirectUri = 'http://localhost:3000/';

const clientId = '72d1abff13fa4ea39b10d2c67c2f0215';

// Allow to get the permission from the user
const scopes = [
	'user-read-currently-playing',
	'user-read-recently-played',
	'user-read-playback-state',
	'user-top-read',
	'user-modify-playback-state',
];

export const getTokenFromUrl = () => {

	return window.location.hash
		.substring(1)
		.split('&')
		.reduce((initial, item) => {
			// #accessToken="secret&name="karma"
			let parts = item.split('=');
			initial[parts[0]] = decodeURIComponent(parts[0]);
			return initial;
		}, {});
};

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	'%20'
)}&response_type=token&show_dialog=true`;
