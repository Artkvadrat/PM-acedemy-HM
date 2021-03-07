import React from "react";
import { Link } from "react-router-dom";

import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Link to='/'>
                    <h2>
                        HomeWork 13
                    </h2>
                </Link>
            </div>
            <div className={styles.links}>
                <Link to='/weather'>
                    Weather
                </Link>
                <Link to='/retro'>
                    Retrospective
                </Link>
                <Link to='/todos'>
                    TodoList
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
