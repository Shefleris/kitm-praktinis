const AddComment = () => {
	const [formData, setFormData] = useState({
			userId:'',
			comment:'',
	})
	
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
				const res = await questionApi().postComment(formData)
				
		} catch (err) {
				setError(err)
		}
	}
	return (
		<form class="p-3" id="form_signup">
			<div class="form-floating mb-3">
				<input 
					class="form-control" 
					type="text" 
					id="title" 
					name="title" 
					placeholder="Title" 
					required/>
				<label for="username">Title</label>
			</div>
			<div class="form-floating mb-3">
				<input 
					class="form-control" 
					type="email" 
					id="email" 
					name="email" 
					placeholder="Email" 
					required/>
				<label for="email">Email</label>
			</div>
			<div class="alert alert-danger" role="alert" id="alert_error">
			</div>
			<div class="d-flex align-items-center">
				<button class="btn btn-primary me-3" type="submit">Sign-up</button>
				<div><a class="signup_link" id="signup_link" href="/login">login</a></div>
			</div>
		</form>
	)
}