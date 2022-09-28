import '../styles/globals.css'
import 'material-icons/iconfont/material-icons.css';
import type {AppProps} from 'next/app'
import {ThemeProvider} from "next-themes";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
