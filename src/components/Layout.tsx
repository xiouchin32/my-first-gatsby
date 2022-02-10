import React from "react";
import { Link } from "gatsby";

const Layout = () => {
    return (
        <main id="Layout">
            <nav>
                <ul className="nav-links">
                    <li className="nav-link-item">
                        <Link to="/" className="nav-link-text">
                            Home
                        </Link>
                    </li>
                    <li className="nav-link-item">
                        <Link to="/about" className="nav-link-text">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </main>
    );
};

export default Layout;
