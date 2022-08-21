import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

import axios from "../utils/axios";
import loader from "../assets/all-images/loader.gif";
import errorImg from "../assets/all-images/error.png";

export const Login = () => {
    const navigate = useNavigate();
    const errMsgRef = useRef(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const showError = (msg) => {
        let alertBox = document.querySelector('.alert-box');
        let alertMsg = document.querySelector('.alert-msg');
        alertMsg.innerHTML = msg;
        alertBox.classList.add('show');
        setTimeout(() => {
            alertBox.classList.remove('show');
        }, 3000);
    }

    const handleFormSubmit = async () => {
        setIsLoading(true)

        try {
            const { data } = await axios({
                url: "/api/v1/auth/login",
                method: "post",
                data: { email, password }
            });
            localStorage.setItem("user", JSON.stringify(data));
            navigate("/");
        } catch (err) {
            showError(err.response.data.msg);
            console.log(err);
        }

        setIsLoading(false);

    }


    return (
        <section className="auth__form">
            {isLoading && <img src={loader} className="loader" alt="loader_gif" />}

            <div className="alert-box" ref={errMsgRef}>
                <img src={errorImg} className="alert-img" alt="error_img" />
                <p className="alert-msg">Error message</p>
            </div>

            <div className="auth__container">
                <img src="" alt="" />

                <div>

                    <input
                        type="email"
                        value={email}
                        name="email"
                        id="email"
                        autoComplete="off"
                        placeholder="email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        value={password}
                        name="password"
                        id="password"
                        autoComplete="off"
                        placeholder="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="signup" onClick={handleFormSubmit}>Log In</button>

                </div>
                <Link to="/register" className="link auth-link">Don't have an account? Create one</Link>
                {/* <a href="./login" className="link auth-link">already have an account? Log in here</a> */}
            </div>
        </section>
    );
}