'use client'
import { createContext, useContext, useState, useEffect } from "react";
import { ILoggedUser as UserType } from "@/types/auth";
import { getLoggedUser } from '@/services/auth';
import { logOut } from "@/services/auth";
import { toast } from "react-toastify";
import { isLoggedUser } from "@/utils/auth";
interface MainContextValue {
    loggedUser: UserType;
    handleLogOut: () => void
}

const initialUser: UserType = {
    name: '',
    phone: '',
    email: ''
}

const Context = createContext<MainContextValue>({
    loggedUser: initialUser,
    handleLogOut: async () => { }
});

const MainContext = ({ children }: { children: React.ReactNode }) => {

    const [loggedUser, setLoggedUser] = useState<UserType>(initialUser);

    useEffect(() => {
        if (isLoggedUser())
            fetchLoggedUser();
    }, [])

    const fetchLoggedUser = async () => {
        try {
            const response = await getLoggedUser();
            setLoggedUser(response.data);
        } catch (error: any) {
            console.log(error)
        }
    };

    const handleLogOut = async () => {
        try {
            const res = await logOut();
            toast.success('logOut success');
            document.cookie = 'isLogged=; Path=/; Max-Age=0'
            deleteLoggedUser();
        } catch (error) {
            console.log(error);
        }
    }

    const deleteLoggedUser = () => setLoggedUser(initialUser)

    return (
        <Context.Provider value={{ loggedUser, handleLogOut }}>
            {children}
        </Context.Provider>
    )
}

const useMainContext = () => {
    return useContext(Context)
}

export { useMainContext, MainContext }