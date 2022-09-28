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
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                        <svg id="menu-close-icon" className="h-6 w-6 transition duration-200 ease-in-out"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
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
                            <a href="#"
                               className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                                </svg>
                                <span>About</span>
                            </a>
                            <a href="#"
                               className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                <span className="ml-6">Without Icon</span>
                            </a>
                            <a href="#"
                               className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white group">
                                <span
                                    className="w-4 h-4 flex-shrink-0 border border-gray-600 rounded group-hover:border-gray-400 transition duration-200"></span>
                                <span>Without Icon And a bit longer than usual</span>
                            </a>
                        </nav>
                    </div>

                    <nav data-dev-hint="second-main-navigation or footer navigation">
                        <a href="#"
                           className="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                            Logout
                        </a>
                    </nav>
                </aside>
        </>
    );
}