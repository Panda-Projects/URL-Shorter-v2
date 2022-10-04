import {NextPage} from "next";
import Sidebar from "../components/sidebar";
import React from "react";

const Redirect: NextPage = () => {
    return (
        <>

            <div className="relative min-h-screen md:flex" data-dev-hint="container">
                <Sidebar/>
                <main id="content" className="flex-1 p-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="px-4 py-6 sm:px-0">
                            <h2 className="my-6 text-2xl font-bold text-gray-700 dark:text-gray-200">Redirect</h2>
                        </div>
                    </div>
                </main>
            </div>

        </>
    )
}

export default Redirect;