import React from 'react'
// import GenerateCardHeader from './GenerateCardHeader'
import Cards from './Cards'
// import { CiCreditCard1 } from "react-icons/ci";
// import { TiBusinessCard } from "react-icons/ti";
// import { MdCardGiftcard } from "react-icons/md";

const GenerateCard: React.FC = () => {
    return (
        <div className='sm:ml-0 lg:ml-64 flex flex-col items-center justify-between  p-4 bg-slate-200  flex-grow mt-16 h-screen'>
            <div className="header w-full p-4 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 place-items-center">
                <Cards />

            </div>
            <div className="card-edit-section flex items-center justify-betweenw-full">
                <div className="card-editing-area">
                    Card editing
                </div>
                <div className="preview-area">
                    Preview
                </div>
            </div>
        </div>
    )
}

export default GenerateCard