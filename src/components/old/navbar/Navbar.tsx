import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo.png"
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

const Navbar: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [toggleNav, seToggleNav] = useState(false)
    const [selectedItem, setSelectedItem] = useState<number | null>(null)
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const toggleDropdown = () => {
        if (toggleNav) {
            seToggleNav(false)
        }
        setIsDropdownOpen(!isDropdownOpen)
    }
    const expandNav = () => {
        if (isDropdownOpen) {
            setIsDropdownOpen(false)
        }
        seToggleNav(!toggleNav)
    }
    const handleItemClick = (index: number) => {
        setSelectedItem(selectedItem === index ? null : index);
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
        <>
            <nav className="bg-blue-900 border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">

                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">QuckView</span>
                    </a>
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                        <button onClick={toggleTheme} className='p-1 border-solid border-white text-black bg-white rounded-full mr-4 font-extrabold'>
                            {theme === 'light' ? <CiLight size={"1.3em"} /> : <CiDark size={"1.3em"} />}

                        </button>

                        <button onClick={toggleDropdown} type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded={isDropdownOpen} data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        <div className={`z-50 ${isDropdownOpen ? "" : "hidden"} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute xl:right-80 top-10`} id="user-dropdown">
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- Dropdown menu end --> */}
                        <button onClick={expandNav} data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded={toggleNav}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden={!toggleNav} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between ${toggleNav ? "" : "hidden"} w-full md:flex md:w-auto md:order-1`} id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:bg-blue-900 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {["Home", "About", "Pricing", "Contact"].map((menu, index) => (
                                <li key={index} onClick={() => {
                                    handleItemClick(index)
                                }}>
                                    <a href="#" className={`block py-2 px-3 text-gray-900 ${selectedItem === index ? "md:text-red-300 sm:bg-blue-300 md:bg-inherit" : "md:text-white"} rounded hover:bg-blue-300 md:hover:bg-transparent md:hover:text-red-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`} aria-current={selectedItem === index ? "true" : "false"}>{menu}</a>
                                </li>
                            ))}


                        </ul>
                    </div>

                </div>
            </nav>

        </>
    )
}

export default Navbar