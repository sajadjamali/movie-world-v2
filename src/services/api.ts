import { IAuthData } from "@/types/auth";
import { getErrorMessage } from "@/utils/auth";
export const baseUrl = "https://api.themoviedb.org/3";
export const imgBaseUrl = "https://image.tmdb.org/t/p/w500";

const url = process.env.NEXT_PUBLIC_BASE_URL;

export const getApi = async (slug: string) => {
    try {
        const response = await fetch(`${url}${slug}`)
        if (!response.ok) getErrorMessage(response.status)
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        throw error
    }
}

export const postApi = async (slug: string, data: IAuthData) => {
    try {
        const response = await fetch(`${url}${slug}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) getErrorMessage(response.status, slug)
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        throw error
    }
}