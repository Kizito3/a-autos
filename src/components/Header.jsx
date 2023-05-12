
import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMenuVisible(false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
        <header className='bg-white shadow-2xl py-2 px-4 sticky z-40 border-b'>
                      <nav className="flex items-center justify-between flex-wrap px-3 max-w-6xl mx-auto">
                      <div>
                      <img src={logo} alt="" />
                    </div>
                       <div className="block lg:hidden">
                          <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-custom-color hover:text-white hover:border-white" onClick={handleToggleMenu}>
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <title>Menu</title>
                              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                          </button>
                        </div>


                      <div className={`w-full block flex-grow lg:flex  lg:items-center lg:w-auto ${menuVisible ? 'block' : 'hidden'}`}>
                              <ul className="text-xl lg:flex-grow flex justify-end mt-4 space-x-10">
                                <li className="block lg:mt-0 text-slate-700 mt-2 ">
                                  Docs
                                </li>
                                <li className="block lg:mt-0 text-slate-700 mt-2 ">
                                  Examples
                                </li>
                                <li className="block lg:mt-0 text-slate-700 mt-2">
                                  Blog
                                </li>
                                <li className=" btn2 py-2 px-4 text-slate-700">
                                Sign In
                                </li>
                              <li className=" btn1 py-2 px-4 text-white rounded">
                                Sign In
                              </li>
                           
                              </ul>
                    </div>  
                </nav>
              </header>

  );
};

export default Header;
