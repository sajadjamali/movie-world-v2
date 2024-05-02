export interface IRegisterInfo {
    name: string;
    password: string;
    phone: string;
    email: string;
}

export interface ILoginInfo extends Pick<IRegisterInfo, 'password' | 'email'> {}

export interface IAuthData extends ILoginInfo {
    name?: string;
    phone?: string;
}

export interface ILoggedUser extends Omit<IRegisterInfo, 'password'> { }