import type {NextPage} from 'next'
import Sidebar from "../components/sidebar";
import React from "react";
import Map from '../components/map';


const Home: NextPage = () => {

    return (
        <>
            <div className="relative min-h-screen md:flex" data-dev-hint="container">
                <Sidebar/>
                <main id="content" className="flex-1 p-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="px-4 py-6 sm:px-0">
                            <h2 className="my-6 text-2xl font-bold text-gray-700 dark:text-gray-200">Dashboard</h2>
                            <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
                                <div className="container mx-auto max-w-full">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                                        <div className="px-4 mb-10">
                                            <div
                                                className="w-full bg-white dark:bg-[#1a1c23] rounded-xl shadow-md p-4 undefined">
                                                <div className="flex flex-wrap undefined">
                                                    <div
                                                        className="bg-gradient-to-tr from-pink-500 to-pink-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-pink mb-0">
                                                        <span
                                                            className="material-icons text-white text-3xl leading-none">link</span>
                                                    </div>
                                                    <div
                                                        className="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
                                                        <h5 className="text-gray-500 dark:text-gray-300 font-light tracking-wide text-base mb-1">Redirects</h5>
                                                        <span
                                                            className="text-3xl text-gray-900 dark:text-gray-100">350,897</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 mb-10">
                                            <div
                                                className="w-full bg-white dark:bg-[#1a1c23]  rounded-xl overflow-hdden shadow-md p-4 undefined">
                                                <div className="flex flex-wrap undefined">
                                                    <div
                                                        className="bg-gradient-to-tr from-orange-500 to-orange-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-orange mb-0">
                                                        <span
                                                            className="material-icons text-white text-3xl leading-none">groups</span>
                                                    </div>
                                                    <div
                                                        className="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
                                                        <h5 className="text-gray-500 dark:text-gray-300 font-light tracking-wide text-base mb-1">Users</h5>
                                                        <span
                                                            className="text-3xl dark:text-gray-100 text-gray-900">2,356</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 mb-10">
                                            <div
                                                className="w-full bg-white rounded-xl dark:bg-[#1a1c23] overflow-hdden shadow-md p-4 undefined">
                                                <div className="flex flex-wrap undefined">
                                                    <div
                                                        className="bg-gradient-to-tr from-purple-500 to-purple-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-purple mb-0">
                                                        <span
                                                            className="material-icons text-white text-3xl leading-none">ads_click</span>
                                                    </div>
                                                    <div
                                                        className="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
                                                        <h5 className="text-gray-500 font-light dark:text-gray-300 tracking-wide text-base mb-1">Totay
                                                            Clicks</h5>
                                                        <span
                                                            className="text-3xl dark:text-gray-100 text-gray-900">924</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 mb-10">
                                            <div
                                                className="w-full bg-white dark:bg-[#1a1c23] rounded-xl overflow-hdden shadow-md p-4 undefined">
                                                <div className="flex flex-wrap undefined">
                                                    <div
                                                        className="bg-gradient-to-tr from-blue-500 to-blue-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-blue mb-0">
                                                        <span
                                                            className="material-icons text-white text-3xl leading-none">poll</span>
                                                    </div>
                                                    <div
                                                        className="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
                                                        <h5 className="text-gray-500 dark:text-gray-300 font-light tracking-wide text-base mb-1">Total
                                                            Clicks</h5>
                                                        <span
                                                            className="text-3xl dark:text-gray-100 text-gray-900">49,65%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container mx-auto max-w-full">
                                <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
                                    <div className="px-4 mb-10">
                                        <div
                                            className="w-full bg-white dark:bg-[#1a1c23] rounded-xl shadow-md p-4 undefined">
                                            <h1 className="text-center text-xl font-bold my-2">Last Clicks from Redirects</h1>
                                            <Map />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Home
