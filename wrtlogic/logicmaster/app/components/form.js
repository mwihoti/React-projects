"use client";
import React, { useState } from 'react';
import Welcome from './welcome';



function Form() {
const [loggedIn, setLoggedIn] = useState("");
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState("")
  const [count, setCount] = useState(0)

  const countAdd = () =>{
    setCount(count + 1);
  }
  const countMinus = () =>{
    setCount(count - 1);
  }

  return (
    <main  className='bg-neutral-900 w-screen h-screen items-center text-center text-white'>
    <div>
      <div className='p-3'> 
        <h1 className='text-5xl text-indigo-90 underline decoration-2  font-bold'>Welcome to Logic master Dan </h1>
      </div>
<div className=''>
      <ul className='flex space-x-2  justify-end m-3'>
        <li className='border border-yellow-500 rounded-2xl p-3'>
         <a href=''> Home</a>
        </li>
        <li className='border border-yellow-500 rounded-xl p-3'> <a href=''>
            Contact</a></li>
      </ul>
      </div>
           
    </div>
    <div className='bg-white text-black width-80 mx-auto rounded '>
      <form className='p-5'>
        <div className='mb-3'>
        <label className='p-2'>UserName</label>
        <input type='text' name='user' className='border border-black rounded p-1' value=''></input>
        </div>
        <div>

        <div className='mb-3'>
        <label className='p-2'>Password</label>
        <input type='text' name='pass' className='border border-black rounded p-1 value="password"'></input>
        </div>
        <button type='button' className='border border-black px-5 py-2 rounded ' onClick=''> Login</button>
        </div>

        <div>

        </div>
      </form>
    </div>
   <div>
    <h1 className='text-white mb-3'>Product: {count}</h1>
    <div className='space-x-4'>
    <button  onClick={countAdd} className='p-4 rounded border border-white'>+</button>
    <button  onClick={countMinus} className='p-4 rounded border border-white'>-</button>
    </div>
   </div>
    </main>
  )
}

export default Form