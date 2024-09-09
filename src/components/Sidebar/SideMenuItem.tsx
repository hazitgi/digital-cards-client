import React from 'react'

const SideMenuItem: React.FC<{
    name: string,
    symbol: React.ReactNode,
    additionalInfo: string | null,
    selectedMenu: string | null,
    handleMenuSelect: (name: string) => void
}> =
    ({ name, symbol, additionalInfo, selectedMenu, handleMenuSelect }) => {
        return (
            <li onClick={() => handleMenuSelect(name)}>
                <a href="#" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${selectedMenu === name ? `bg-gray-300 dark:bg-gray-500` : null}`}>
                    {symbol}
                    <span className="flex-1 ms-3 whitespace-nowrap">{name}</span>
                    {additionalInfo &&
                        <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">{additionalInfo}</span>
                    }
                </a>
            </li>
        )
    }

export default SideMenuItem