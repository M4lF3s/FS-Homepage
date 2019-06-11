import Head from 'next/head'
import { Fragment } from 'react';

export default () => (
    <Fragment>
        <Head>
            <title>This is our page title!</title>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
            <meta name="description" content="This is an example of a meta description. This will show up in search results." />
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <style jsx global>{`
            body { 
                background: #ccc;
                font: 11px Montserrat;
                color: #fff;
                margin: 0;
            }
        `}</style>
    </Fragment>
)