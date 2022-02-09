import React from "react";
import { Link } from "gatsby";

const Layout = () => {
    return (
        <main>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home Page</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </main>
    );
};

export default Layout;
