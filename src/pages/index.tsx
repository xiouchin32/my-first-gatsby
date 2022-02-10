import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import "../styles/App.scss";

const IndexPage = () => {
    return (
        <main>
            <title>Home Page</title>
            <Layout />
            <h1>Welcome to my Gatsby site!</h1>
            <Link to="/about">Learn About Me &rarr;</Link>
        </main>
    );
};

export default IndexPage;
