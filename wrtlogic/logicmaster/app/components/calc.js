"use client";
import React, { useState } from 'react'

function Calc() {
    const [tvalue, setTvalue] = useState({text1: '', text2:''. result})
    const handleValue = (e) => {
        const {name, value} = e.target;
        setTvalue({...tvalue, [name]: value})

    }
    const valueMultiply = () => {
        const result = parseInt(tvalue.text1) * parseInt(tvalue.text2)
        setTvalue({...tvalue, result})
    }
    const valueAdd = () => {
        const result = parseInt(tvalue.text1) + parseInt(tvalue.text2)
        setTvalue({...tvalue, result})

    }
    return (
        <div className='bg-white text-black'>
          <div>
            <label>Enter Value 1</label><br/>
            <input type='text' className='border border-black' placeholder='enter' name='text1' value={tvalue.text1} onChange={handleValue} />
            </div>  
            <div>
            <label>Enter Value 2
            </label><br/>
            <input type='text' className='border border-black mb-3' placeholder='number' name='text2' onChange={handleValue} value={tvalue.text2}/>
            </div>
            <div className='flex space-x-4'>
            <button className=' border border-black px-3' onClick={valueAdd}>Add</button>

            <button onClick={valueMultiply} className=' border border-black px-4'>Multiply</button>
            <p className='mx-auto'>Calculated values: {tvalue.result} </p>
            </div>
            
        </div>
    )
}

export default Calc
