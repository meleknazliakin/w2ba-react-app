import axios, { AxiosError } from 'axios';
export const baseURL = 'https://8jb4uusrgu.eu-west-1.awsapprunner.com';
export const api = axios.create({ baseURL });

export interface IApiError extends AxiosError {
}

api.interceptors.request.use(
	request => {
        
		return request;
	},
	error => {
		return Promise.reject(error);
	}
);

api.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (401 === error.response.status) {
			localStorage.removeItem('token');
			localStorage.removeItem('user');
			window.location.href = '/login';
		}

		return Promise.reject(error);
	}
);

export const get = async(url: string) => { 
	try {
		const res = await api.get(url).then(res => res);

		return {
			data: res.data,
			status: true
		};
	}
	catch (error: IApiError | any) {
		return {
			status: false,
			error: error?.response?.data?.message
		};
	}
};

export const post = async (url: string, data: any = {}) => {
	try {
		const res = await api.post(url, data).then(res => res);

		return {
			data: res.data,
			status: true
		};
	}
	catch (error: IApiError | any) {
		return {
			status: false,
			error: error?.response?.data?.message
		};
	}
};

export const patch = async (url: string, data: any = {}) => {
	try {
		const res = await api.patch(url, data).then(res => res);

		return {
			data: res.data,
			status: true
		};
	}
	catch (error: IApiError | any) {
		return {
			status: false,
			error: error?.response?.data?.message
		};
	}
};

export const put = async (url: string, data: any = {}) => {
	try {
		const res = await api.put(url, data).then(res => res);

		return {
			data: res.data,
			status: true
		};
	}
	catch (error: IApiError | any) {
		return {
			status: false,
			error: error?.response?.data?.message
		};
	}
};

export const remove = async(url: string) => { 
	try {
		const res = await api.delete(url).then(res => res);

		return {
			data: res.data,
			status: true
		};
	}
	catch (error: IApiError | any) {
		return {
			status: false,
			error: error?.response?.data?.message
		};
	}
};

export const apiURL = {
	auth: {
		login: '/login',
		profile: '/profile',
	},
	company: {
		addressess: '/company-addresses',
		roles: '/company-roles',
		users: '/company-users',
		areas: '/company-areas',
		permissions: '/permissions',
	},
	general: {
		userSessions: '/user-sessions',
		userLogins: '/user-logins',
	},

	product: '/products',
	decisionTree: '/decision-tree/calculate',
	stockRequests: '/stock-requests',
	stocks: '/stocks',
	categories: '/categories',
	brands: '/brands',
	cities: '/cities',
	sectors: '/sectors',
	districts: 'districts?cityId=',
	taxOffices: 'tax-offices?cityCode=',
	applications: '/applications',
	upload: '/upload',
	categoryTree: '/categories/tree',
	cart: '/cart',
	orders: '/orders',
};