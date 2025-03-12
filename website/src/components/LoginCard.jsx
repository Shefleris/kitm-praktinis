import React, {useState} from "react";
import { questionApi } from "../services/questionApi";

const LoginCard = () => {
	const [formData, setFormData] = useState({
		email:'',
		password:'',
	})
	const [error, setError] = useState(null)

	const formValueChange = (e) => {
		e.preventDefault();
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const formSubmit = async (e) => {
		e.preventDefault();
		setError(null)
		try {
			const res = await questionApi().postLogin(formData)
		} catch (err) {
			setError(err)
		}
	}

	return (
		<div className="card">
			<form class="p-3" id="form_login">
				<div class="form-floating mb-3">
					<input 
						class="form-control" 
						type="email" 
						id="email" 
						name="email" 
						placeholder="Email" 
						required
						onChange={formValueChange}
						value={formData.email}/>
					<label for="email">Email</label>
				</div>
				<div class="form-floating mb-3">
					<input 
						class="form-control" 
						type="password" name="password" 
						id="password" placeholder="Password" 
						required
						onChange={formValueChange}
						value={formData.password}
						/>
					<label for="password">Password</label>
				</div>
				{!error && <div 
					class="alert alert-danger" 
					role="alert" 
					id="alert_error" 
				>
					{error}
				</div>}
				<div class="d-flex align-items-center">
					<button 
						class="btn btn-primary me-3" 
						type="submit"
						onClick={formSubmit}
						>
							Login
						</button>
					<div>
						<a class="signup_link" id="signup_link" href="/signup">sign-up</a>
					</div>
				</div>
			</form>
		</div>
	)
};

export default LoginCard;