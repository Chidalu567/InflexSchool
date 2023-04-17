import PageFooter from "../Interfaces/LayoutInterfaces/Footer";
import PageHeader from "../Interfaces/LayoutInterfaces/Header";
import Head from "next/head";
import React from "react";

export const Layout = ({ children }) => {
  return (
    <>
      {/* SEO part of the page */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="School Management Application for E-records"
        />
        <meta name="author" content="Chidalu Okechukwu" />
        <meta httpEquiv="refresh" content="60" />
      </Head>

      {/* Page header component */}
      <PageHeader />

      {/* Body of the page */}
      <main>{children}</main>

      {/* Page footer component */}
      <PageFooter />
    </>
  );
};
