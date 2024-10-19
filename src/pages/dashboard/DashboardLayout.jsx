import axios from 'axios';
import React, { useEffect, useState } from 'react'

import Loading from '../../components/Loading';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { HiViewGridAdd } from "react-icons/hi";
import { MdOutlineManageHistory } from "react-icons/md";
import dashboardImg from '../../assets/footer-logo.webp'

const DashboardLayout = () => {

  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/")
  }

  return (
    <section className="flex md:bg-gray-100 min-h-screen overflow-hidden">
      <aside className="hidden sm:flex sm:flex-col">
        <a href="/" className="inline-flex items-center justify-center h-20 w-24 bg-purple-600 hover:bg-purple-500 focus:bg-purple-500">
          <img src={dashboardImg} alt="" />
        </a>
        <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
          <nav className="flex flex-col mx-20 my-6 space-y-4">
            <Link to="/dashboard" className="inline-flex items-center justify-center py-3 text-purple-600 rounded-lg">
              Dashboard
            </Link>
            <Link to="/dashboard/add-new-book" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
              Add Book
            </Link>
            <Link to="/dashboard/manage-books" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
         
              View Book
            </Link>
          </nav>
        </div>
      </aside>
      <div className="flex-grow text-gray-800">
        <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
          <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
            <span className="sr-only">Menu</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>
          <div className="flex flex-shrink-0 items-center ml-auto">

            <div className="pl-3 ml-3 space-x-1">

              <button
                onClick={handleLogout}
                className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                <span className="sr-only">Log out</span>
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>
        </header>
        <main className="p-6 sm:p-10 space-y-6 ">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
            <div className="mr-6">
              <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
              <h2 className="text-gray-600 ml-0.5">Book Store Inventory</h2>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-end -mb-3">
              <Link to="/dashboard/manage-books" className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Manage Books
              </Link>
              <Link to="/dashboard/add-new-book" className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add New Book
              </Link>
            </div>
          </div>
          <Outlet />
        </main>
      </div>
    </section>
  )
}

export default DashboardLayout