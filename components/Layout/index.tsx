import React from "react";
import Header from "./Header";
import Head from "next/head";

interface Props {
  children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
        <Head>
            <title>Stock</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
          <Header />
          {children}
    </>
  );
};

export default Layout;
