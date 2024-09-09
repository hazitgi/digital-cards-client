import React from 'react'

const GenerateCardHeader = ({ name, logo }: { name: string, logo: React.ReactNode }) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="logo">
                {logo}
            </div>
            <h1>{name}</h1>
        </div>
    )
}

export default GenerateCardHeader