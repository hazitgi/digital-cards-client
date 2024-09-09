import Login from '@/components/Login'
import Navbar from '@/components/Navbar/Navbar'
import API from '@/services/API'
import axios from 'axios'
import { useState, useEffect } from 'react'
const checkLoginStatus = async () => {
    try {
        const res = await API.get("/users/protected");
        console.log("Logged in", res.data);
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            console.log("Not Logged in", err.response.data);
        } else {
            console.error("An error occurred", err);
        }
    }
};
const LoginPage = () => {
    const [openSideBar, setOpenSideBar] = useState(false)
    useEffect(() => {
        checkLoginStatus();
        console.log("LoginPage mounted");

    }, []);
    return (
        <>
            <Navbar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
            <Login />
        </>
    )
}

export default LoginPage