import {Link} from 'react-router-dom'

const Header = () => {
	return (
		<nav className='d-flex justify-content-between align-items-center mb-3 mt-3'>
			<div>
				<Link to='/'>Home</Link>
			</div>
			<div className='d-flex g-2'>
				<Link to='/login me-2' className='btn btn-primary'>Login</Link>
				<Link to='/signup' className='btn btn-outline-primary'>Sign-up</Link>
			</div>
		</nav>
	)
}

export default Header;