import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const contact = () => {
    return (
        <Layout>
            <div>
                <h1>Hi! Contact Me!</h1>
                <Link to="/">&larr; Back to Home</Link>
            </div>
        </Layout>
    );
};

export default contact;
