import {NextPage} from "next";
import {useEffect} from "react";
import {removeCookies} from "cookies-next";
import {useRouter} from "next/router";

const Logout: NextPage = () => {
    const router = useRouter()

    useEffect(() => {
        removeCookies("IHpKXQWXjx");
        router.push("/login")
    })

    return (
        <></>
    )
}

export default Logout;