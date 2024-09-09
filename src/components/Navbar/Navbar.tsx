import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo.png"
import { HiMenuAlt2 } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Navbar: React.FC<{ openSideBar: boolean, setOpenSideBar: (open: boolean) => void }> = ({ setOpenSideBar, openSideBar }) => {
    const [openUserMenu, setOpenUserMenu] = useState(false)
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const handleUserMenu = () => {
        if (openSideBar) setOpenSideBar(false)
        setOpenUserMenu(!openUserMenu)
    }
    const handleSideBar = () => {
        if (openUserMenu) setOpenUserMenu(false)
        setOpenSideBar(!openSideBar)
    }
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <nav className="fixed top-0 z-40 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <button className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={handleSideBar}>
                            <span className="sr-only">Open sidebar</span>
                            <HiMenuAlt2 size={"1.5em"} />
                        </button>
                        <a href="#" className="flex ms-2 md:me-24">
                            <img src={logo} className="h-8 me-3" alt="FlowBite Logo" />
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">QuickView</span>
                        </a>
                    </div>

                    <div className="flex items-center">
                        <div className="flex items-center ms-3">
                            <div className='md:mx-4 sm:mx-2'>
                                <button type="button" className="flex items-center w-9 h-9 justify-center text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    onClick={toggleTheme}
                                >
                                    {theme === 'light' ?
                                        <MdDarkMode size={"1.2rem"} />
                                        : <MdOutlineLightMode size={"1.2rem"} className='text-white' />
                                    }
                                    <span className="sr-only">Toggle dark/light mode</span>
                                </button>
                            </div>
                            <div>
                                <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user" onClick={handleUserMenu}>
                                    <span className="sr-only">Open user menu</span>
                                    <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                                </button>
                            </div>
                            <div className={`z-50 ${openUserMenu ? `` : `hidden`} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 fixed right-2 top-10`} id="dropdown-user">
                                <div className="px-4 py-3" role="none">
                                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                                        Neil Sims
                                    </p>
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                        neil.sims@flowbite.com
                                    </p>
                                </div>
                                <ul className="py-1" role="none">
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Profile</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar