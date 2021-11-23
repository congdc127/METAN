import React from 'react';
import Script from 'next/script';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
    const router = useRouter();

    return (
        <div className="main-app" id="main-app">
            <Head>
                <title>METAN EVOLUTION</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                    charset="UTF-8"
                />
                <link
                    rel="icon"
                    href="favicon.svg"
                    type="image/x-icon"
                    charset="UTF-8"
                />

                <link rel="stylesheet" href="/fonts/font-main/stylesheet.css" />

                <script src="/plugins/spine-player-4.js"></script>
                <link
                    rel="stylesheet"
                    href="http://esotericsoftware.com/files/spine-player/4.0/spine-player.css"
                ></link>
                <script src="https://www.gstatic.com/charts/loader.js"></script>
            </Head>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
}
