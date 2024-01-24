import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <Link className="about-link" to={`/about`}>
                <h2 className="about-us">About Us</h2>
            </Link>
        </footer>
    )
}