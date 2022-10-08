import {NextPage} from "next";
import Sidebar from "../components/sidebar";
import React, {useEffect, useState} from "react";
import {getCookie} from "cookies-next";
import {useRouter} from "next/router";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const Redirect: NextPage = () => {
    const router = useRouter()
    const [role, setRole] = useState("")
    const MySwal = withReactContent(Swal)
    const [redirects, setRedirects] = useState([
        {
            id: 1,
            code: "",
            userId: 1,
            redirect_url: "",
            date: "",
            username: ""
        }
    ])
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
                    await updateRedirection();
                })
            } else {
                await router.push("/logout")
            }
        })


    }, [])

    async function updateRedirection() {
        fetch("/api/redirect", {
            headers: headers,
            method: "GET"
        }).then(value => value.json()).then(value => setRedirects(value))
    }

    function onDelete(id: number) {
        MySwal.fire({
            icon: "question",
            cancelButtonColor: "#d71a1a",
            showCancelButton: true,
            cancelButtonText: "No, don't delete",
            confirmButtonText: "Yes, delete",
            title: "Do you want to delete the redirect?",
            confirmButtonColor: "#51971c",
            customClass: {
                popup: "dark:bg-[#1a1c23] bg-gray-50",
                title: "dark:text-white text-black"
            }
        }).then(async value => {
            if (value.isConfirmed) {
                if (role === "admin") {
                    await fetch("/api/redirect/" + id, {
                        method: "DELETE",
                        headers: headers,
                    }).then(value => {
                        value.json().then((value1) => {
                            if (value.status === 200) updateRedirection();
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
                            <h2 className="my-6 text-2xl font-bold text-gray-700 dark:text-gray-200">Redirect</h2>
                            <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
                                <div className="container mx-auto max-w-full">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                                        {redirects.map(value => {
                                            if (value.redirect_url === "") return;
                                            const createDate = new Date(value.date);
                                            return (
                                                <>
                                                    <div className="px-4 mb-10" onClick={() => navigator.clipboard.writeText(window.location.protocol +
                                                        "://" + window.location.hostname + "/" + value.code)}>
                                                        <div
                                                            className="w-full bg-white dark:bg-[#1a1c23] rounded-xl shadow-md undefined relative lg:h-[500px] h-[300px]"
                                                            style={{
                                                                backgroundImage: "linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.77)), url('https://image.thum.io/get/" + value.redirect_url + "')",
                                                                backgroundPosition: "center top",
                                                                backgroundSize: "cover"
                                                            }}>
                                                            <button onClick={() => onDelete(value.id)} className="absolute right-4 pt-4 w-[30px] fill-red-800 hover:fill-red-900">
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                     stroke="currentFill"
                                                                     viewBox="0 0 448 512">
                                                                    <path
                                                                        d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                                                                </svg>
                                                            </button>
                                                            <div className="absolute bottom-0 w-full">
                                                                <h1 className="block text-center lg:text-4xl text-2xl font-bold uppercase">{value.code}</h1>
                                                                <p className="text-center text-lg"><a
                                                                    href={value.redirect_url}>{value.redirect_url}</a>
                                                                </p>
                                                                <div className="">
                                                                    <p className="inline-block float-left w-[45%] pl-[5%] pb-2">{createDate.getDate() + "." + (createDate.getMonth() + 1) + "." + createDate.getFullYear()}</p>
                                                                    <p className="inline-block float-right w-[45%] pr-[5%] text-right pb-2">{value.username}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}
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

export default Redirect;