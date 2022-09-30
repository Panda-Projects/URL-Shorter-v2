import {NextPage} from "next";
import Sidebar from "../components/sidebar";
import React from "react";

const User: NextPage = () => {
    return (
        <>
            <div className="relative min-h-screen md:flex" data-dev-hint="container">
                <Sidebar/>
                <main id="content" className="flex-1 p-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="px-4 py-6 sm:px-0">
                            <h2 className="my-6 text-2xl font-bold text-gray-700 dark:text-gray-200">User</h2>
                            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                                <div className="w-full overflow-x-auto">
                                    <table className="w-full whitespace-no-wrap">
                                        <thead>
                                        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-[#1a1c23]">
                                            <th className="px-4 py-3">Username</th>
                                            <th className="px-4 py-3">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-[#1a1c23]">

                                        </tbody>
                                    </table>
                                </div>
                                <div
                                    className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-[#1a1c23]">
                <span className="flex items-center col-span-3">
                  Showing 0 of 0                </span>
                                    <span className="col-span-2"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default User;