export const loginService = async (data: { email: string, password: string }) => {
	// this is a dummy login service
	// it returns email's first part as user name
	
	const res = {
		status: true,
		data: {
			user: {
				name: data.email.split('@')[0],
				email: data.email
			}
		}
	};

	return res;
};