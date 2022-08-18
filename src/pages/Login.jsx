import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <section className="auth__form">
            <div className="auth__container">
                <img src="" alt="" />

                <div>

                    <input type="email" name="email" id="email" autoComplete="off" placeholder="email" />
                    <input type="password" name="password" id="password" autoComplete="off" placeholder="password" />
                    <button className="signup">Log In</button>

                </div>
                <Link to="/register" className="link auth-link">Don't have an account? Create one</Link>
                {/* <a href="./login" className="link auth-link">already have an account? Log in here</a> */}
            </div>
        </section>
    );
}