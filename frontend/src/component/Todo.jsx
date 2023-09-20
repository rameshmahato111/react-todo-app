import React, { useState } from 'react'
// import InputComponent from './InputComponent'
import { AiOutlineDelete } from "react-icons/ai"
const Todo = () => {
    const [todo, setTodo] = useState('')

    const [items, setItems] = useState([])
    const addTodo = () => {
        if (!todo) {
        }
        else {
            setItems([...items, todo])
            setTodo('')
        }
    }
    const deleteItems = (id) => {
        const delI = items.filter((product, i) => {
            return (i !== id);
        })
        setItems(delI)
    }

    return (
        <>
            <div className='w-full h-screen bg-gray-400 py-20 px-10 '>
                <div className='max-w-md mx-auto px-2 sm:py-10 font-poppins bg-white rounded-md shadow-lg pb-4'>
                    <h1 className='text-center font-semibold sm:text-2xl text-xl'>Your Daily Schedules</h1>
                    <div className='min-w-[100px] mx-auto my-10'>
                        <input type="text" name='todo' id='todo' className='w-full h-10 focus:outline-none border border-gray-400 px-4'
                            value={todo}
                            onChange={(e) => setTodo(e.target.value)}
                        />
                    </div>
                    <button type='button' value={'submit'} className='bg-green-500 px-4 py-2 rounded-lg outline-none mb-4 text-white' onClick={addTodo}>Save</button>
                    {items && items.map((product, i) => {
                        return <>
                            <div key={i} className='w-full flex items-center justify-between px-2 bg-gray-400  py-3 rounded-md sm:my-3 my-5 hover:bg-gray-600 cursor-pointer'>
                                <h1 className='text-white text-xl'>{product}</h1>
                                <div>
                                    <button className='text-red-700 text-xl'
                                        onClick={() => deleteItems(i)}
                                    >
                                        <AiOutlineDelete />
                                    </button>
                                </div>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </>
    )
}
export default Todo