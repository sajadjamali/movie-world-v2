import { IRegisterInfo, ILoginInfo } from "@/types/auth";

export const trimedData = (obj: IRegisterInfo | ILoginInfo): IRegisterInfo | ILoginInfo => {
    const trimmedObject: Partial<IRegisterInfo> = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key as keyof (IRegisterInfo | ILoginInfo)];
            trimmedObject[key as keyof IRegisterInfo] = typeof value === 'string' ? value.trim() : value;
        }
    }
    return trimmedObject as IRegisterInfo;
}

// ----------------------------------------------------------------------

export const getErrorMessage = (statusCode: number, slug?: string) => {
    switch (statusCode) {
        case 400:
            if (slug == 'auth/register') throw new Error("user has already registered");
            else throw new Error("password is invalid");
        case 401:
            throw new Error("Authorization required");
        case 404:
            throw new Error("user is not registered");
        default:
            throw new Error("Internal server error");
    }
}

// ---------------------------------------------------------------------

export const expiresDate = () => {
    let currentDate = new Date();
    currentDate.setTime(currentDate.getTime() + 4 * 24 * 60 * 60 * 1000);
    let expires = currentDate.toUTCString();
    return expires;
}

// ----------------------------------------------------------------------

export const isLoggedUser = () => document.cookie.split('=')[0] === 'isLogged'