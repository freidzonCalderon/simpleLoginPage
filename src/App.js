import React, { useState } from 'react';
import './App.css';
import Login from './components/Login'
import HomePage from './components/HomePage'

function App() {

	const [userData, setUserData] = useState({});

	const onSubmitHandler = (input) => {
		setUserData(input);
	}

	return <div className='App'>
		{(userData.userName) ? <HomePage infoData={userData} /> : <Login onSubmit={onSubmitHandler}/>}
	</div>;
}

export default App;
