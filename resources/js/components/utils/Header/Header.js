import React from "react";
import {
    Link
} from 'react-router-dom'

const Header = ({ activePath, routes, handleMenu }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">Task</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {routes && routes.map((route, i) => {
                        return (
                            <li onClick={handleMenu} key={`header-url-${i}`} className={route.path === activePath ? "nav-item active" : "nav-item"}>
                                <Link to={route.path} className="nav-link" >{route.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav >
    )
}

export default Header;