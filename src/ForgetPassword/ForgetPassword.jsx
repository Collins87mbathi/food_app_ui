import React,{useState} from'react'
import axios from 'axios';
import {BASE_URL} from '../Utils/constants';
import './ForgetPassword.scss'; 

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(BASE_URL + "/user/password-reset", {email});
			setMsg(data.message);
			setError("");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				setMsg("");
			}
		}
	};

	return (
		<div className='Forget-container'>
			<form className='form_container' onSubmit={handleSubmit}>
				<h3>Forgot Password</h3>
				<input
					type="email"
					placeholder="Email"
					name="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					required
					className='input'
				/>
				{error && <div className='error_msg'>{error}</div>}
				{msg && <div className='success_msg'>{msg}</div>}
				<button type="submit" className='green_btn'>
					Submit
				</button>
			</form>
		</div>
	);
}

export default ForgetPassword