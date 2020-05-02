import React from 'react';
import { renderToString }from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from "../client/Routes";
import { ServerStyleSheet } from 'styled-components';

export default (req) => {
    const sheet = new ServerStyleSheet();
    const content = renderToString(
        sheet.collectStyles(
            <StaticRouter location = {req.path} context = {{}} >
                <Routes/>
            </StaticRouter>
        )
    );
    const styles = sheet.getStyleTags();
    return `
        <html>
            <head>
            ${styles}
            </head>
            <body>
                <div id = 'root'>${content}</div>
                <script src = 'bundle.js'></script>
            </body>
        </html>
    `;
}