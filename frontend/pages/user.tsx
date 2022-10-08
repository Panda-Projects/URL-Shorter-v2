import {NextPage} from "next";
import Sidebar from "../components/sidebar";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {getCookie, removeCookies} from "cookies-next";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const User: NextPage = () => {
    const router = useRouter()
    const [users, setUsers] = useState([
        {
            id: 1,
            username: "Test",
            email: "test@test.de",
            status: "0",
            role: "admin"
        }
    ]);
    const [role, setRole] = useState("")
    const MySwal = withReactContent(Swal)

    const headers = new Headers()
    headers.append("Authorization", "Bearer " + getCookie("IHpKXQWXjx") as string)

    useEffect(() => {
        fetch("/api/user/validation", {
            headers: headers,
            method: "GET",
        }).then(async value => {
            if (value.status === 200) {
                value.json().then(async value1 => {
                    setRole(value1.role)
                    if (value1.role.toLowerCase() === "admin") {
                        await updateUser();
                    } else {
                        await router.push("/")
                    }
                })
            } else {
                await router.push("/logout")
            }
        })
    }, [])

    async function updateUser() {
        fetch("/api/user", {
            headers: headers,
            method: "GET"
        }).then(value => value.json()).then(value => setUsers(value))
    }

    async function activeUser(userId: number) {
        await fetch("/api/user/active/" + userId, {
            method: "POST",
            headers: headers
        }).then(value => {
            if (value.status === 200) {
                updateUser();
            }
        })
    }

    async function onDelete(userId: number) {
        MySwal.fire({
            icon: "question",
            cancelButtonColor: "#d71a1a",
            showCancelButton: true,
            cancelButtonText: "No, don't delete",
            confirmButtonText: "Yes, delete",
            title: "Do you want to delete the user?",
            confirmButtonColor: "#51971c",
            customClass: {
                popup: "dark:bg-[#1a1c23] bg-gray-50",
                title: "dark:text-white text-black"
            }
        }).then(async value => {
            if (value.isConfirmed) {
                if (role === "admin") {
                    await fetch("/api/user/" + userId, {
                        method: "DELETE",
                        headers: headers,
                    }).then(value => {
                        value.json().then((value1) => {
                            if (value.status === 200) updateUser();
                            MySwal.fire({
                                toast: true,
                                position: "top-end",
                                timer: 3000,
                                title: value1.message,
                                timerProgressBar: true,
                                customClass: {
                                    popup: "dark:bg-[#1a1c23] bg-gray-50",
                                    title: "dark:text-white text-black",
                                },
                                icon: value.status === 200 ? "success" : "error",
                                showCancelButton: false,
                                showConfirmButton: false,
                            })
                        })
                    })
                }
            }
        })
    }

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
                                    {users.map(value => {
                                        return (
                                            <>
                                                <div
                                                    className="p-4 text-gray-500 my-3 rounded-xl bg-gray-50 dark:text-gray-400 dark:bg-[#1a1c23]">
                                                    <table className="w-full">
                                                        <tbody>
                                                        <tr>
                                                            <td className="w-12">
                                                                <img
                                                                    aria-hidden="true"
                                                                    className="hidden w-7 h-7 rounded-full object-cover w-full h-full dark:block"
                                                                    src="/profil-dark.png"
                                                                    alt="Office"
                                                                />
                                                            </td>
                                                            <td className="font-bold w-50">{value.username}</td>
                                                            <td className="text-center uppercase w-20">{value.role}</td>
                                                            <td>
                                                                {value.status === "0" ?
                                                                    <>
                                                                        <button
                                                                            onClick={() => onDelete(value.id)}
                                                                            className="bg-red-500 rounded-2xl p-1 float-right mx-3 inline-block">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                 className="w-5 p-0.5 h-5 fill-white"
                                                                                 stroke="currentColor"
                                                                                 viewBox="0 0 384 512">
                                                                                <path
                                                                                    d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
                                                                            </svg>
                                                                        </button>
                                                                        <button
                                                                            onClick={() => activeUser(value.id)}
                                                                            className="bg-green-500 rounded-2xl p-1 float-right mx-3 inline-block">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                 className="w-5 p-0.5 h-5 fill-white"
                                                                                 stroke="currentColor"
                                                                                 viewBox="0 0 512 512">
                                                                                <path
                                                                                    d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                                                                            </svg>
                                                                        </button>
                                                                    </>
                                                                    :
                                                                    <>
                                                                        <button
                                                                            onClick={() => onDelete(value.id)}
                                                                            className="bg-red-500 rounded-2xl p-1 float-right mx-3 inline-block">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                 className="w-5 p-0.5 h-5 fill-white"
                                                                                 stroke="currentColor"
                                                                                 viewBox="0 0 448 512">
                                                                                <path
                                                                                    d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                                                                            </svg>
                                                                        </button>
                                                                    </>
                                                                }
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </>
                                        )
                                    })}
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