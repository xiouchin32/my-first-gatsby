import React from "react";
import Header from "./Header";
import Footer from "./Footer";
interface props {
    children: JSX.Element;
}

const Layout = ({ children }: props) => {
    return (
        <>
            <Header />
            <main id="Layout">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
