import { create } from 'zustand';

import { loginService } from '../../services/authServices';
import { api } from '../../services/api';
import { IUserActions, IUserState, UserType } from './models';

const initialState: IUserState = {
	loading: false,
	error: '',
	user: <UserType>{} ,
	isAuthentication: false
};

const useUserStore = create<IUserState & IUserActions>()((set, get) => ({
	...initialState,

	login: async (data: { email: string, password: string }) => {
		set({ loading: true });
		const response = await loginService(data);

		if (response.status) {
			set({
				loading: false,
				user: { ...response?.data.user, name: response?.data.user.name, email: response?.data.user.email },
				isAuthentication: true,
				error: ''
			});

			localStorage.setItem('user', JSON.stringify({ ...response?.data.user, name: response?.data.user.name }));
		}
		else {
			localStorage.removeItem('user');

			set({
				loading: false,
				error: '',
				isAuthentication: false,
			});
		}
	},

	loginControl: async () => {
		const user = localStorage.getItem('user');

		if(user !== null) {			
			set({
				user: JSON.parse(user),
				isAuthentication: true,
			});
		}
		else {
			set(initialState);
		}
	},

	logout: () => {
		set(initialState);
		localStorage.removeItem('user');
	},
}));

export default useUserStore;
