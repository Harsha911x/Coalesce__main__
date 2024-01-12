import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Image
              src="/Image/logo.png"
              alt="Logo Alt Text"
              width={100}
              height={100}
              className="rounded-full"
            />
            <span className="ml-3 text-xl"></span>
          </a>
          
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">

            <div className="absolute top-39 right-10 mr-4 mt-4" style={{ color: "white" }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 448 512" fill='white'>
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            </div>

          </nav>
          {/* Remove the button at the end */}
        </div>
      </header>
    </div>
  );
};

export default Header;



