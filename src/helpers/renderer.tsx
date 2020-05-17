import React from 'react';
import { renderToString }from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import {renderRoutes } from "react-router-config";
import Routes from "../client/Routes";
import {Helmet} from "react-helmet";
import { ServerStyleSheet } from 'styled-components';
import {Provider} from "react-redux";
import serialize from "serialize-javascript";

export default (req, store, context) => {
    const sheet = new ServerStyleSheet();
    const content = renderToString(
        sheet.collectStyles(
            <Provider store = {store}>
                <StaticRouter location = {req.path} context = {context} >
                   <React.Fragment>
                       {renderRoutes(Routes)}
                   </React.Fragment>
                </StaticRouter>
            </Provider>
        )
    );
    const styles = sheet.getStyleTags();
    const helmet = Helmet.renderStatic();

    return `
        <html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
            <style>
                html,
                body, #root {
                  height: 100%;
                  margin: 0
                }
            </style>
            ${styles}
            </head>
            <body>
                <div id = 'root'>${content}</div>
                <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
                <script src = 'bundle.js'></script>
            </body>
        </html>
    `;
}