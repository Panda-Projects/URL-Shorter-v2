import type {NextPage} from 'next'
import Sidebar from "../components/sidebar";
import React from "react";


const Home: NextPage = () => {
    return (
        <>
            <div className="relative min-h-screen md:flex" data-dev-hint="container">
                <Sidebar/>
                <main id="content" className="flex-1 p-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="px-4 py-6 sm:px-0">
                            <h2 className="my-6 text-2xl font-bold text-gray-700 dark:text-gray-200">Dashboard</h2>
                            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-[#1a1c23]">
                                    <div
                                        className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                                        <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 640 512">
                                            <path
                                                d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"></path>
                                        </svg>

                                    </div>
                                    <div>
                                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                            Links
                                        </p>
                                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                            0 </p>
                                    </div>
                                </div>
                                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-[#1a1c23]">
                                    <div
                                        className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                                        <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 640 512">
                                            <path
                                                d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                            Users
                                        </p>
                                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                            1 </p>
                                    </div>
                                </div>
                                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-[#1a1c23]">
                                    <div
                                        className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                                        <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 384 512">
                                            <path
                                                d="M0 352c0 88.38 71.63 160 160 160h64c88.38 0 160-71.63 160-160V224H0V352zM176 0H160C71.63 0 0 71.62 0 160v32h176V0zM224 0h-16v192H384V160C384 71.62 312.4 0 224 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                            Total Clicks
                                        </p>
                                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                            0 </p>
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
