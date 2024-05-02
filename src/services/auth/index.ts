import { getApi, postApi } from "../api";
import { IAuthData } from "@/types/auth";

export const register = (data: IAuthData) => postApi('auth/register', data);
export const login = (data: IAuthData) => postApi('auth/login', data);
export const logOut = () => getApi('auth/logOut');