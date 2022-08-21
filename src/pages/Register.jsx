import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "../utils/axios";
import loader from "../assets/all-images/loader.gif";
import errorImg from "../assets/all-images/error.png";

export const Register = () => {
    const navigate = useNavigate();
    const errMsgRef = useRef(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(false)
    // const [errMsg, setErrMsg] = useState("")
    const [termsAndConditions, setTermsAndConditions] = useState(false);

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
                url: "/api/v1/auth/signup",
                method: "post",
                data: { name, email, password, number, termsAndConditions }
            });

            localStorage.setItem("user", JSON.stringify(data));
            navigate("/");
        } catch (err) {
            // setError(true);
            // setErrMsg(err);
            console.log(err);
            showError(err.response.data.msg);
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
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="off"
                        placeholder="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        placeholder="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="off"
                        placeholder="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input
                        type="text"
                        name="number"
                        id="number"
                        autoComplete="off"
                        placeholder="number"
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                    />
                    <input type="checkbox" name="termsAndConditions" value={termsAndConditions} className="checkbox" id="terms-and-conditions" onChange={() => setTermsAndConditions(!termsAndConditions)} />
                    <label htmlFor="terms-and-conditions" className="auth-label">agree to our <a href="123">terms and conditions</a></label>
                    <br />
                    <input type="checkbox" className="checkbox " id="notifications" />
                    <label htmlFor="notifications" className="auth-label">receive upcoming offers and Event malls</label>
                    <button
                        className="signup"
                        onClick={handleFormSubmit}
                    >
                        create account
                    </button>

                </div>
                <Link to="/login" className="link auth-link">already have an account? Log in here</Link>
                {/* <a href="./login" className="link auth-link">already have an account? Log in here</a> */}
            </div>
        </section>
    );
}