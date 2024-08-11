import React from 'react';

const Navbar: React.FC = () => {
  return (
    <>
      <nav className=" bg-lime-600 " style={{backgroundColor:' rgb(20 109 10)' }}>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="imges/Frame 14 (2).png" className="h-12 w-15" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Health Life</span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <button>Sing Up</button>
          
            <a href="#" className="text-xl text-white hover:underline">Login</a>
          </div>
        </div>
      </nav>

      <nav className="bg-white">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a href="/" className="text-black text-lg font-bold hover:underline" aria-current="page">Home</a>
              </li>
              <li>
                <a href="/about" className="text-black text-lg font-bold hover:underline">About</a>
              </li>
              <li>
                <a href="/product" className="text-black text-lg font-bold hover:underline">product</a>
              </li>
              <li>
                <a href="/contact" className="text-black text-lg font-bold  hover:underline">Contact</a>
              </li>
            </ul>
            <div className= "rounded-lg"style={{ position: 'relative', left: '100vh' }}>
            <input
              type="text"
              id="search-navbar"
              className=" block w-30 p-2 ps-10 text-sm bg-black border-gray-600 placeholder-lime-600 text-white focus:lime-600 focus:border-lime-600"
              placeholder="Search..."
            />
            </div>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
