import React from 'react'

function DefaultLayout(props) {
    return ( 
        <html>
            <head>
                <link rel="stylesheet" href="/styles.css" />
            </head>
            <body>
                    {props.children}
            </body>
        </html>
    );
}

export default DefaultLayout;