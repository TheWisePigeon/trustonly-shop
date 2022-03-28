import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginScreen() {
  return (

    <>
      <div className="flex items-center justify-center text-center pt-8 ">
        <form novalidate="" action="" className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg  ">
          <label for="email" className="self-start text-xs font-semibold">Email</label>
          <input id="email" type="email" className="flex items-center h-12 px-4 mt-2 rounded border " />
          <label for="password" className="self-start mt-3 text-xs font-semibold">Password</label>
          <input id="password" type="password" className="flex items-center h-12 px-4 mt-2 rounded border" />
          <button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-emerald-400 text-white ">Sign Up</button>
          <div className="flex justify-center mt-6 space-x-2 text-xs ">
            <Link rel="noopener noreferrer" to="/login" className="">Sign In</Link>
          </div>
        </form>
      </div >
    </>
  )
}
