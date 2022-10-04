import type {NextPage} from 'next'
import React, {useEffect} from "react";
import {useRouter} from "next/router";

const RedirectCode: NextPage = () => {
    const router = useRouter()
    const { code } = router.query

    useEffect(() => {
        if(code !== undefined) {
            fetch("/api/redirect/" + code).catch().then(value => {
                if(value.status === 200) {
                    value.json().then(value1 => {
                        router.push(value1.url)
                    })
                }
            })
        }
    })
    return(
        <></>
    )
}

export default RedirectCode;