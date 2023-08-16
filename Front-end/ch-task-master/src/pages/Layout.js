import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
    return (
        <>
            <nav className="horizontal-bar">
                <ul>
                    <li>
                        <a href="#github">Logo</a>
                    </li>
                    <li id="login">
                        <Link to="/login">Log in</Link>
                    </li>
                    <li id="signup">
                        <Link to="/signup">Sign up</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout;