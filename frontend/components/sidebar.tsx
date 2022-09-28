import React from "react";
import Link from "next/link";

export default function Sidebar() {
    return (
        <>
            <input type="checkbox" id="menu-open" className="hidden"/>

            <header className="bg-gray-600 dark:bg-[#1a1c23] text-gray-100 flex justify-between md:hidden"
                    data-dev-hint="mobile menu bar">
                <a href="#" className="block p-4 text-white font-bold whitespace-nowrap truncate">
                    URL-Shorter
                </a>

                <label htmlFor="menu-open" id="mobile-menu-button"
                       className="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md">
                    <svg id="menu-open-icon" className="h-6 w-6 transition duration-200 ease-in-out"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                    <svg id="menu-close-icon" className="h-6 w-6 transition duration-200 ease-in-out"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </label>
            </header>

            <aside id="sidebar"
                   className="bg-gray-800 dark:bg-[#1a1c23] text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
                   data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
                <div className="flex flex-col space-y-6"
                     data-dev-hint="optional div for having an extra footer navigation">
                    <a href="#" className="text-white flex items-center space-x-2 px-4" title="URL-Shorter">
                        <span className="text-2xl font-extrabold whitespace-nowrap truncate">URL-Shorter</span>
                    </a>

                    <nav data-dev-hint="main navigation">
                        <Link href="/">
                            <a
                                className="flex items-center space-x-2 py-2 px-4 my-1 transition duration-200 hover:bg-gray-700 hover:text-white">

                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="h-4 w-5 dark:fill-white fill-gray-800"
                                     fill="none" viewBox="0 0 512 512" stroke="currentColor">
                                    <path
                                        d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                                </svg>
                                <span>Dashboard</span>
                            </a>
                        </Link>
                        <Link href="/user">
                            <a
                                className="flex items-center space-x-2 py-2 px-4 my-1 transition duration-200 hover:bg-gray-700 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="h-4 w-5 dark:fill-white fill-gray-800"
                                     fill="none" viewBox="0 0 512 512" stroke="currentColor">
                                    <path
                                        d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                                </svg>
                                <span>User</span>
                            </a>
                        </Link>
                        <Link href="/redirect">
                            <a
                                className="flex items-center space-x-2 py-2 px-4 my-1 transition duration-200 hover:bg-gray-700 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="w-5 h-3 dark:fill-white fill-gray-800"
                                     fill="none" viewBox="0 0 512 512" stroke="currentColor">
                                    <path
                                        d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/>
                                </svg>
                                <span>Redirect</span>
                            </a>
                        </Link>
                    </nav>
                </div>

                <nav data-dev-hint="second-main-navigation or footer navigation">
                    <Link href="/logout">
                        <a
                            className="flex items-center space-x-2 py-2 px-4 my-1 transition duration-200 hover:bg-gray-700 hover:text-whit">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-3 dark:fill-white fill-gray-800"
                                 fill="none" viewBox="0 0 512 512" stroke="currentColor">
                                <path
                                    d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"/>
                            </svg>
                            <span>Logout</span>
                        </a>
                    </Link>
                </nav>
            </aside>
        </>
    );
}