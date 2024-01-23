import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <Link to={`/about`}>
                <h2>About Us</h2>
            </Link>
        </footer>
    )
}