import React from 'react'

const Navbar: React.FC = () => {
    return (
        <nav className='flex flex-col justify-between items-center bg-yellow-50 h-screen w-72'>
            <div className="nav-item top">
                <h6 className='text-1xl'>Counter</h6>
            </div>
            <div className="nav middle">
                <h6 className='text-1xl'>Menu</h6>
            </div>
            <div className='nav bottom'>
                <h6 className='text-1xl'>Bottom</h6>
            </div>
        </nav>
    )
}

export default Navbar