import React from 'react'
import Navigation from './navigation'

const Header = () => {
  // const { user } = user()
  // return (
  //     <header className="text-gray-600 body-font">
  //       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  //         <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
  //           <svg
  //             className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
  //             fill="none"
  //             stroke="currentColor"
  //             viewBox="0 0 24 24"
  //             xmlns="http://www.w3.org/2000/svg"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               strokeWidth="2"
  //               d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
  //             ></path>
  //           </svg>
  //         </Link>
  //       </div>
  //     </header>
  // )
  return (
      <div className="bg-white">
        <header className="relative bg-white">
          <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
            Get free delivery on orders over $100
          </p>
          <Navigation />
        </header>
      </div>
  )
}

export default Header
