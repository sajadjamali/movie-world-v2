interface IData {
    name?: string;
    password: string;
    phone?: string;
    email: string;
}

export const trimedData = (data: IData): IData => {
    for (const key of Object.keys(data) as Array<keyof IData>) {
        if (typeof data[key] === 'string') {
            data[key] = data[key]?.trim() ?? '';
        }
    }
    return data;
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