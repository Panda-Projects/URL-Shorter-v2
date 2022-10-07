import type {NextPage} from 'next'
import Sidebar from "../components/sidebar";
import React, {useEffect, useState} from "react";
import Map from '../components/map';
import {getCookie, removeCookies} from "cookies-next";
import {useRouter} from "next/router";


const Home: NextPage = () => {
    const router = useRouter()
    const [analytics, setAnalytics] = useState({
        totaluser: 0,
        redirects: 0,
        redirectsClicks: 0,
        redirectsClicksToday: 0
    });

    const headers = new Headers()
    headers.append("Authorization", "Bearer " + getCookie("IHpKXQWXjx") as string)

    useEffect(() => {
        fetch("/api/user/validation", {
            headers: headers,
            method: "GET",
        }).then(value => {
            if (value.status === 200) {
                fetch("/api/information", {
                    headers: headers,
                    method: "GET"
                }).then(value => value.json()).then(value => setAnalytics(value))
            } else {
                removeCookies("IHpKXQWXjx")
                router.push("/login")
            }
        })
    }, [])

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
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 fill-white" stroke="currentColor"
                                                            viewBox="0 0 640 512">
                                                            <path
                                                                d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
                                                        <p className="text-gray-500 dark:text-gray-300 font-light tracking-wide text-m mb-1">Redirects</p>
                                                        <span
                                                            className="text-3xl text-gray-900 dark:text-gray-100">{analytics.redirects}</span>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                             className="h-5 fill-white" stroke="currentColor"
                                                             viewBox="0 0 640 512">
                                                            <path
                                                                d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80s-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM416 224c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
                                                        <p className="text-gray-500 dark:text-gray-300 font-light tracking-wide text-m mb-1">Users</p>
                                                        <span
                                                            className="text-3xl dark:text-gray-100 text-gray-900">{analytics.totaluser}</span>
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
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                             className="h-5 fill-white" stroke="currentColor"
                                                             viewBox="0 0 384 512">
                                                            <path
                                                                d="M0 192H176V0H160C71.6 0 0 71.6 0 160v32zm0 32V352c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V224H192 0zm384-32V160C384 71.6 312.4 0 224 0H208V192H384z"/>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
                                                        <p className="text-gray-500 font-light dark:text-gray-300 tracking-wide text-m mb-1">Today
                                                            Clicks</p>
                                                        <span
                                                            className="text-3xl dark:text-gray-100 text-gray-900">{analytics.redirectsClicksToday}</span>
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

                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                             className="h-5 fill-white" stroke="currentColor"
                                                             viewBox="0 0 448 512">
                                                            <path
                                                                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 192c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm64-64c0-17.7 14.3-32 32-32s32 14.3 32 32V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V160zM320 288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32z"/>
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right undefined">
                                                        <p className="text-gray-500 dark:text-gray-300 font-light tracking-wide text-m mb-1">Total
                                                            Clicks</p>
                                                        <span
                                                            className="text-3xl dark:text-gray-100 text-gray-900">{analytics.redirectsClicks}</span>
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
                                            <h1 className="text-center text-xl font-bold my-2">Last Clicks from
                                                Redirects</h1>
                                            <Map/>
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
