import { Outlet } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
    return (
        <>
            <main>
                <form action="">
                    <label>First name: <br />
                        <input type="text" name="fname" id="fname" required />
                    </label>
                    <label>Last name: <br />
                        <input type="text" name="lname" id="lname" required />
                    </label>
                    <label>Email: <br />
                        <input type="email" name="email" id="email" required />
                    </label>
                    <label>Password: <br />
                        <input type="password" name="password" id="password" required />
                    </label>
                    <label>Confirm password: <br />
                        <input type="password" name="cpassword" id="cpassword" required />
                    </label>
                    <input type="submit" value="Sign up" />
                    <div class="forgotPassword">
                        <a href="/login.html">Already sign up?</a>
                    </div>
                </form>
            </main>
            <Outlet />
        </>
    )
}

export default SignUp;