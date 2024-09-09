import React, { useState } from 'react'
import SideMenuItem from '../Sidebar/SideMenuItem';
import { TiBusinessCard } from "react-icons/ti";
import { CiCreditCard1 } from "react-icons/ci";
import { MdCardGiftcard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar: React.FC<{ openSideBar: boolean, setOpenSideBar: (open: boolean) => void }> = ({ openSideBar, setOpenSideBar }) => {
    const [selectedMenu, setSelectedMenu] = useState<string | null>(null)
    const handleMenuSelect = (name: string) => {
        setSelectedMenu(selectedMenu === name ? null : name)
    }
    return (
        <>
            <div className={`fixed top-0 left-0 z-20 w-64 h-screen pt-20 transform transition-transform duration-300 ease-in-out ${openSideBar ? `translate-x-0` : `-translate-x-full`} bg-white border-r border-gray-200 lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700`} >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <SideMenuItem
                            name={"Digital Business Card"}
                            symbol={<CiCreditCard1 size={"1.5em"} />}
                            selectedMenu={selectedMenu}
                            handleMenuSelect={() => handleMenuSelect("Digital Business Card")}
                            additionalInfo={null}
                        />
                        <SideMenuItem
                            name={"Product Info Card"}
                            symbol={<MdCardGiftcard size={"1.5em"} />}
                            selectedMenu={selectedMenu}
                            handleMenuSelect={() => handleMenuSelect("Product Info Card")}
                            additionalInfo={null}
                        />
                        <SideMenuItem
                            name={"Personal Info Card"}
                            symbol={<TiBusinessCard size={"1.5em"} />}
                            selectedMenu={selectedMenu}
                            handleMenuSelect={() => handleMenuSelect("Personal Info Card")}
                            additionalInfo={null}
                        />
                        <SideMenuItem
                            name={"Settings"}
                            symbol={<IoSettingsOutline size={"1.5em"} />}
                            selectedMenu={selectedMenu}
                            handleMenuSelect={() => handleMenuSelect("Settings")}
                            additionalInfo={null}
                        />

                    </ul>
                </div>
            </div>
            {
                openSideBar &&
                <div onClick={() => setOpenSideBar(!openSideBar)} className='lg:hidden fixed z-10 bg-gray-600 bg-opacity-50 h-screen w-screen'></div>
            }
        </>
    )
}

export default Sidebar