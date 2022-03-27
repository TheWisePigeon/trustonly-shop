import React from "react";

export default function Header() {
  return (
    <header className="p-1 shadow-lg w-full font-mono font-semibold ">
      <div className="container flex justify-between h-16 ">
        <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center text-2xl">
          TrustOnly
        </a>

        <div className="items-center flex-shrink-0 flex md:flex lg:flex ">
          <div className=" pt-1 mr-4 justify-center">
            <a href="" className=" no-underline ">
              <i className=" ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </i>
            </a>
          </div>
          <div className=" pt-1">
            <a href="" className=" no-underline ">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </i>
            </a>
          </div>



        </div>
      </div>
    </header>
  )
}
