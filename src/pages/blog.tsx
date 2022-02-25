import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const blog = () => {
    return (
        <Layout>
            <>
                <h1>Blog page!</h1>
                <Link to="/">&larr; Back to Home</Link>
            </>
        </Layout>
    );
};

export default blog;
