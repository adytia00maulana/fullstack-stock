import React from "react";
import Header from "./header";
import Head from "next/head";

interface Props {
  children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
        <Head>
            <title>Stock</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
          <Header />
          {children}
    </div>
  );
};

export default Layout;
