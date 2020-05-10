import React from 'react';
import { renderToString }from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from "react-router-config";
import Routes from "../client/Routes";
import { ServerStyleSheet } from 'styled-components';
import {Provider} from "react-redux";

export default (req, store) => {
    const sheet = new ServerStyleSheet();
    const content = renderToString(
        sheet.collectStyles(
            <Provider store = {store}>
                <StaticRouter location = {req.path} context = {{}} >
                   <React.Fragment>
                       {renderRoutes(Routes)}
                   </React.Fragment>
                </StaticRouter>
            </Provider>
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