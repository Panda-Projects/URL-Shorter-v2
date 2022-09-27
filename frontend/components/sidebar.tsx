import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Sidebar() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    const router = useRouter();
    return (
        <>
            <nav className="fixed z-30 w-full bg-gray-50 dark:bg-[rgb(26,28,35)]">
                <div className="px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start cursor-pointer">
                            <button className="p-2 text-gray-600 rounded cursor-pointer lg:hidden ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            </button>
                            <Link href="/" className="flex items-center cursor-pointer text-xl font-bold ">
                                <span className="text-blue-800">URL-Shorter</span>
                            </Link>

                        </div>
                        <div className="flex items-center">
                            <div className="relative inline-block ">
                                <button
                                    className="relative flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none">
                                    <span className="mx-1">Jane Doe</span>
                                    <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="pt-12 lg:flex">
                <div
                    className="flex flex-col w-full bg-gray-50 dark:bg-[rgb(26,28,35)] px-4 py-8 overflow-y-auto lg:h-screen lg:w-64">


                    <div className="flex flex-col justify-between mt-6">
                        <aside>
                            <ul>
                                <li>
                                    <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md "
                                       href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                             viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                                        </svg>

                                        <span className="mx-4 font-medium">Dashboard</span>
                                    </a>
                                </li>

                                <li>
                                    <a className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                                       href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                             viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>

                                        <span className="mx-4 font-medium">User</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                                       href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                             viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>

                                        <span className="mx-4 font-medium">Redirect</span>
                                    </a>
                                </li>
                            </ul>

                        </aside>

                    </div>
                </div>
                <div className="w-full h-full p-4 m-8 overflow-y-auto">
                    <div className="flex items-center justify-center p-16 mr-8 border-4 border-dotted lg:p-40">
                        Content...
                    </div>
                </div>
            </div>
        </>
    );
}