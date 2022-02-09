import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => {
    return (
        <main>
            <title>Home Page</title>
            <Layout />
            <h1>Welcome to my Gatsby site!</h1>
            <Link to="/about">About page</Link>
        </main>
    );
};

export default IndexPage;
