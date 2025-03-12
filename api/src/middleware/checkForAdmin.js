exports.checkForAdmin = async (req, res, next) => {
	try {
		if (res.locals.user.role !== 'admin'){
			return res.status(403).json({
				status:'Failed',
				message:'You do not have sufficient permissions',
			});
		};
		next();
	} catch (err){
		res.status(400).json({
			status: 'Failed',
			message: err.message,
			temp: res.locals.logUser
		})
	};
};