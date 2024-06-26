'use client'
import { toast } from "react-toastify";
import { logOut } from "@/services/auth";
import { isLoggedUser } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { getLoggedUser } from '@/services/auth';
import { ILoggedUser as UserType } from "@/types/auth";
import { createContext, useContext, useState, useEffect } from "react";

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

    const router = useRouter();
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
            await logOut();
            toast.success('logOut success');
            document.cookie = 'isLogged=; Path=/; Max-Age=0'
            setLoggedUser(initialUser);
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    }

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