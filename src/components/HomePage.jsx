import React from 'react';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = ({ infoData }) => {
	const logOut = () => {
		window.location.reload(false);
	};
	return (
		<div className='container mt-5'>
			<h1>
				Hello, <strong>{infoData.userName}</strong>
			</h1>
			<h2>Welcome back!</h2>

			<button onClick={logOut} className='btn btn-primary'>
				Log Out
			</button>
		</div>
	);
};

export default HomePage;
