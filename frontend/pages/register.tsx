import type {NextPage} from 'next'
import {ChangeEvent, FormEventHandler, useEffect, useState} from "react";
import {setCookie, getCookie} from "cookies-next";
import Router from "next/router";

const Login: NextPage = () => {
    const [registerData, setRegisterData] = useState({
        username: "",
        email: "",
        password_confirm: "",
        password: "",
    })
    const [alert, setAlert] = useState(<></>);

    useEffect(() => {
        if (getCookie("IHpKXQWXjx")) {
            Router.push("/")
        }
    })

    // @ts-ignore
    const login = (event) => {
        event.preventDefault()
        if (registerData.email && registerData.password && registerData.username) {
            if(registerData.password_confirm !== registerData.password) return;
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            fetch("/api/user/create", {
                method: "POST",
                body: JSON.stringify(registerData),
                headers: myHeaders
            }).then(value => {
                value.json().then(value1 => {
                    if (value.status === 201) {
                        Router.push("/login")
                    } else if (value.status === 401 || value.status === 404) {
                        setAlert(
                            <>
                                <div
                                    className="bg-transparent border border-red-400 text-red-700 px-4 py-1 my-1 rounded relative"
                                    role="alert">
                                    <span className="block sm:inline">{value1.message}</span>
                                </div>
                            </>
                        );
                    }
                })
            })
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRegisterData(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    return (
        <div>
            <main>
                <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-[rgba(18,19,23)]">
                    <div
                        className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-[rgb(26,28,35)]"
                    >
                        <div className="flex flex-col overflow-y-auto md:flex-row">
                            <div className="h-32 md:h-auto md:w-1/2">
                                <img
                                    aria-hidden="true"
                                    className="object-cover w-full h-full dark:hidden"
                                    src="/login-office.jpeg"
                                    alt="Office"
                                />
                                <img
                                    aria-hidden="true"
                                    className="hidden object-cover w-full h-full dark:block"
                                    src="/login-office-dark.jpeg"
                                    alt="Office"
                                />
                            </div>
                            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                                <form className="w-full" onSubmit={login}>
                                    <div className="w-full">
                                        <h1
                                            className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"
                                        >
                                            Create first user
                                        </h1>
                                        {alert}
                                        <label className="block text-sm">
                                            <span className="text-gray-700 dark:text-gray-400">Username</span>
                                            <input
                                                className="block w-full rounded mt-1 p-2 text-sm dark:border-[rgb(76,79,82)] dark:bg-[rgb(36,38,45)] focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                placeholder="Jane Doe"
                                                name="username"
                                                onChange={event => handleChange(event)}
                                                required={true}
                                            />
                                        </label>
                                        <label className="block text-sm">
                                            <span className="text-gray-700 dark:text-gray-400">Email</span>
                                            <input
                                                className="block w-full rounded mt-1 p-2 text-sm dark:border-[rgb(76,79,82)] dark:bg-[rgb(36,38,45)] focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                placeholder="email@example.com"
                                                type="email"
                                                name="email"
                                                onChange={event => handleChange(event)}
                                                required={true}
                                            />
                                        </label>
                                        <label className="block mt-4 text-sm">
                                            <span className="text-gray-700 dark:text-gray-400">Password</span>
                                            <input
                                                className="block w-full rounded mt-1 p-2 text-sm dark:border-[rgb(76,79,82)] dark:bg-[rgb(36,38,45)] focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                placeholder="***************"
                                                type="password"
                                                name="password"
                                                onChange={event => handleChange(event)}
                                                required={true}
                                            />
                                        </label>
                                        <label className="block mt-4 text-sm">
                <span className="text-gray-700 dark:text-gray-400">
                  Confirm password
                </span>
                                            <input
                                                className="block w-full rounded mt-1 p-2 text-sm dark:border-[rgb(76,79,82)] dark:bg-[rgb(36,38,45)] focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                                placeholder="***************"
                                                type="password"
                                                name="password_confirm"
                                                onChange={event => handleChange(event)}
                                                required={true}
                                            />
                                        </label>

                                        <div className="flex mt-6 text-sm">

                                        </div>

                                        <button
                                            className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                            type="submit"
                                        >
                                            Create account
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login;
