export type UserType = {
	email: string;
	name: string;
	status?: string;
}

export interface IUserState {
	loading: boolean,
	error: string,
	user: UserType,
	isAuthentication: boolean
}
  
export interface IUserActions  {
	login: (data: any) => void,
	logout: () => void,
	loginControl: () => void
}
  