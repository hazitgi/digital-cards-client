import GenerateCard from '@/components/Card/GenerateCard'
import Navbar from '@/components/Navbar/Navbar'
import Sidebar from '@/components/Sidebar/SIdebar'
import React, { useState } from 'react'


const Homepage: React.FC = () => {
    const [openSideBar, setOpenSideBar] = useState(false)
    return (
        <>
            <Navbar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
            <Sidebar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar}/>
            <GenerateCard />

        </>
    )
}

export default Homepage