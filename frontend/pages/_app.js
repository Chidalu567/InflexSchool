import "../styles/global.css";
import { Layout } from "../components/Layout/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import React from "react";
import { Provider } from "react-redux";
import redux_store from "../Redux/store";

export default function ({ Component, pageProps }) {
  return (
    <Provider store={redux_store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

// wrap the entire application with the redux wrapper
/**
 * The main reason we use the redux-wrapper is because next-js does not support
 * redux. We wrap the application with a redux wrapper.
 */
