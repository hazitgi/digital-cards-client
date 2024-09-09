import React from 'react'

const NavMenu = ({ name, logo, handleMenuClick, selectedMenu }: { name: string, logo: React.ReactNode, handleMenuClick: (name: string) => void, selectedMenu: string | null }) => {
    return (
        <div className={`flex items-center py-3 px-1 hover:bg-blue-300 rounded-sm ${selectedMenu === name ? `bg-blue-600 text-white` : null}`} onClick={() => handleMenuClick(name)}>
            <a className='flex items-center' href="#">
                <div className="logo mr-4">
                    {logo}
                </div>
                <h1 className={`${selectedMenu === name ? `font-extrabold` : null}`}>{name}</h1>
            </a>
        </div>
    )
}

export default NavMenu