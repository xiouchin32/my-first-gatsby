import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const about = () => {
    return (
        <div>
            <Layout />
            <h1>Hi! About Me!</h1>
            <Link to="/">&larr; Back to Home</Link>
        </div>
    );
};

export default about;
