//import { Outlet, Route } from "react-router-dom";
import "./Login.css";

const Login = () => {
    return (
        <>
            <main>
                <form action="">
                    <label>Email: <br />
                        <input type="email" name="email" id="email" />
                    </label>
                    <label>Password: <br />
                        <input type="password" name="password" id="password" />
                    </label>
                    <input type="submit" value="Log in" />
                    <div class="forgotPassword">
                        <a href="#fogotPassword">Forgot password?</a>
                    </div>
                </form>
            </main>
            {/* <Outlet /> */}
        </>
    )
}

export default Login;