import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import { Button } from "@/shade/ui/button"
import NavMenu from './NavMenu'
import { CiCreditCard1 } from "react-icons/ci";
import { TiBusinessCard } from "react-icons/ti";
import { MdCardGiftcard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const SideNav: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null)

  const handleMenuClick = (name: string) => {
    setSelectedMenu(selectedMenu === name ? null : name)
  }


  return (
    <nav className='side-nav bg-slate-50-400 w-64 h-screen p-4 flex flex-col border-r-2 shadow-lg'>
      <div className="profile-section flex flex-col w-full">
        <div className='flex mb-4'>
          <img src={logo} alt="Cybro Telutions" className='rounded-full w-10' />
          <div className='ml-4'>
            <h1 className='text-lg'>Hazi-tgi</h1>
            <h5 className='text-xs'>hazitgi@gmail.com</h5>
          </div>
        </div>
        <Button className='bg-blue-700 hover:bg-blue-800'>Share</Button>
        <hr className='text-black mt-4' />
      </div>


      <div className="nav-menu flex-grow flex flex-col mt-4">
        <NavMenu name={"Digital Business Card"} logo={<CiCreditCard1 size={"1.5em"} />} selectedMenu={selectedMenu} handleMenuClick={handleMenuClick} />
        <NavMenu name={"Product Info Card"} logo={<MdCardGiftcard size={"1.5em"} />} selectedMenu={selectedMenu} handleMenuClick={handleMenuClick} />
        <NavMenu name={"Personal Info Card"} logo={<TiBusinessCard size={"1.5em"} />} selectedMenu={selectedMenu} handleMenuClick={handleMenuClick} />
        <NavMenu name={"Settings"} logo={<IoSettingsOutline size={"1.5em"} />} selectedMenu={selectedMenu} handleMenuClick={handleMenuClick} />
      </div>

      <div className="nav-footer mt-auto w-full ">
        <NavMenu name={"Logout"} logo={<IoIosLogOut size={"1.5em"} />} handleMenuClick={handleMenuClick} selectedMenu={selectedMenu} />
      </div>



    </nav>
  )
}

export default SideNav