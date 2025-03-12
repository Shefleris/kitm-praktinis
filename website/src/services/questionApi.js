export const questionApi = async () => {
	const BaseApiUrl = import.meta.env.VITE_API_URL + import.meta.env.VITE_API_VERSION;  
	return {
		getCategories: async () =>{
			const req = new Request(`${BaseApiUrl}/categories`);
			return fetchService(req);
		},
		getCategoryById: async (categoryId)=>{
			const req = new Request(`${BaseApiUrl}/categories/${categoryId}`);
      return fetchService(req);
		},
		getComplaints: async () => {
			const req = new Request(`${BaseApiUrl}/complaints`);
			return fetchService(req);
		},
		getComplaintById: async (complaintId)=>{
			const req = new Request(`${BaseApiUrl}/categories/${complaintId}`);
      return fetchService(req);
		},
		postSingUp: async (bodyData)=>{
			const req = new Request(`${BaseApiUrl}/auth/signup`, {
				body:{...bodyData}
			});
			return fetchService(req);
		},
		postLogin: async (bodyData)=>{
			const req = new Request(`${BaseApiUrl}/auth/login`, {
				body:{...bodyData}
			});
			return fetchService(req);
		},
		postQuestion: async (bodyData)=>{
			const req = new Request(`${BaseApiUrl}/question`, {
				body:{...bodyData}
			});
			return fetchService(req);
		}
		
	};
};