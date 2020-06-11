export interface ICreationUser {
	username: string;
	email: string;
	password: string;
	//lastname: string;
	//firstname: string;
}

export interface IModifPassword {
	email: string;
	oldPassword: string;
	newPassword: string;
}

export interface ILoginUser {
	email: string;
	password: string;
}

export interface IAuthCheck {
	authenticated: boolean;
	user: any;
}

export interface IAuthRegisterResponse {
	response: any;
	credentials: ILoginUser;
}

export interface IAuthSuccess {
	user: any;
	token: string;
}

export interface IAuthError {
	message: string;
	code: string;
	status: number;
}

export interface IAuthState {
	isAuthenticated: boolean;
	user: any | null;
	token: string | null;
	authLoginError: IAuthError | null;
	authRegisterError: IAuthError | null;
}
