import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import * as counter from "../../store/slice/counter-slice"

const Counter: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
    return (

        <div className='flex flex-col	 justify-center items-center'>
            <h1>{count}</h1>
            <div >

                <button className='p-2 m-3 text-red-700 bg-yellow-300 rounded-md shadow-md outline-none hover:pointer-events-auto' onClick={() => dispatch(counter.decrement())}>-</button>

                <button className='p-2 m-3 text-red-700 bg-yellow-300 rounded-md shadow-md outline-none hover:pointer-events-auto' onClick={() => dispatch(counter.increment())}>+</button>
                <button className='p-2 m-3 text-red-700 bg-yellow-300 rounded-md shadow-md outline-none hover:pointer-events-auto' onClick={() => dispatch(counter.incrementByAmount(10))}> Add 10</button>
                <button className='p-2 m-3 text-red-700 bg-yellow-300 rounded-md shadow-md outline-none hover:pointer-events-auto' onClick={() => dispatch(counter.reset())}>Rest</button>
            </div>


        </div>
    )
}

export default Counter