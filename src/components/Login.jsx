import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ onSubmit }) => {
	const [user, setUser] = useState({
		userName: '',
		password: '',
	});

	const submitHandlerLogIn = (e) => {
		e.preventDefault();
		onSubmit(user); 

	};
	return (
		<div className='container text-center mt-5'>
			<form onSubmit={submitHandlerLogIn}>
				<h1 className='text-center mb-5'>Login Page</h1>
				<div className='row mb-3'>
					<div className='col'></div>
					<div className='col-5'>
						<input
							type='text'
							className='form-control text-center'
							id='validationCustom01'
							placeholder='Username'
							required
							onChange={(e) => {
								setUser({ ...user, userName: e.target.value });
							}}
							value={user.userName}
						/>
					</div>
					<div className='col'></div>
				</div>

				<div className='row mb-3'>
					<div className='col'></div>
					<div className='col-5'>
						<input
							type='password'
							className='form-control text-center'
							id='validationCustom02'
							placeholder='Password'
							required
							onChange={(e) => {
								setUser({ ...user, password: e.target.value });
							}}
							value={user.password}
						/>
					</div>
					<div className='col'></div>
				</div>

				<div className='col-12'>
					<button className='btn btn-primary' type='submit'>
						Log In
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
