import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-700 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Name </span>
      </div>
      <div className="w-full justify-end sm:flex sm:items-center sm:w-auto">
        <div>
          <button className="inline-block text-sm px-4 py-2 leading-none border rounded bg-red-600 text-white border-red-600 hover:border-transparent hover:text-red-600 hover:bg-white mt-4 sm:mt-0">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
