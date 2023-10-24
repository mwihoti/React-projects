"use client"
import React, { useState } from 'react'

function Calc2() {
    const [values, setValues] = useState({value1: '', value2:'', result:" "});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    }
    const addValues = () => {
        const result = parseInt(values.value1) + parseInt(values.value2);
        setValues({...values, result})
    }
    const minValues = () => {
        const result = parseInt(values.value1) - parseInt(values.value2);
        setValues({...values, result})
    }
    return (
        <div className='bg-white text-black text-center'>
            <h2>This is my second type of clalculator</h2>
            <div className='border'>
                <form>
                    <div className='mb-3'>
                    <label>Enter a number</label><br/>
                    <input type="text" name="value1" value={values.value1} className='border border-black mb-3 p-4' onChange={handleChange} />
                    </div>
                    <div className='mb-3'>
                    <label>Enter a number</label><br/>
                    <input type="text" name="value2" value={values.value2} className='border border-black mb-3 p-4' onChange={handleChange} />
                    </div>
                    <div className=' justify-content-center align-items-center space-x-3'>
                    
                        <button className='border justify-center  items-center border-black bg-amber-950 text-white text-3xl px-4' onClick={minValues}> - </button>
                    
                    
                        <button className='border justify-center items-center border-black bg-amber-950 text-white text-3xl px-4' onClick={addValues}> + </button>
                    </div>
                    

                </form>
                <div>
                    <p>The calculated value is : {values.result} </p>
                </div>
                

                </div>
                
                </div>            
        
    )
}

export default Calc2