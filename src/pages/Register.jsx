import { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
    const [checked, setChecked] = useState(true)
    return (
        <section className="auth__form">
            <div className="auth__container">
                <img src="" alt="" />

                <div>

                    <input type="text" name="name" id="name" autoComplete="off" placeholder="name" />
                    <input type="email" name="email" id="email" autoComplete="off" placeholder="email" />
                    <input type="password" name="password" id="password" autoComplete="off" placeholder="password" />
                    <input type="text" name="number" id="number" autoComplete="off" placeholder="number" />
                    <input type="checkbox" {...checked} className="checkbox" id="terms-and-conditions" onChange={() => setChecked(!checked)} />
                    <label htmlFor="terms-and-conditions" className="auth-label">agree to our <a href="123">terms and conditions</a></label>
                    <br />
                    <input type="checkbox" className="checkbox " id="notifications" />
                    <label htmlFor="notifications" className="auth-label">receive upcoming offers and Event malls</label>
                    <button className="signup">create account</button>

                </div>
                <Link to="/login" className="link auth-link">already have an account? Log in here</Link>
                {/* <a href="./login" className="link auth-link">already have an account? Log in here</a> */}
            </div>
        </section>
    );
}