import "../login/Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axiosInstance from "../../helper/Axios";
import AuthContext from "../../context/AuthContext";
import { userInfoTransform } from "../../helper/dataTransform";
import { AiOutlineFile } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { setUserInfo } = useContext(AuthContext);
    const navigate = useNavigate();
    const [redirectLink, setRedirectLink] = useState("/editor");

    useEffect(() => {
        const href = window.location.href;
        const redirectValue = href.split("redirect_to=")[1];
        if (redirectValue) {
            setError("* Access Denied. Login first.");
            setRedirectLink("/" + redirectValue);
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("hello", username, password);
        if (username.trim() && password) {
            const body = { username: username.trim(), password };
            const response = await axiosInstance.post("/auth/login", body);
            if (response.statusText === "OK") {
                const { data } = response;
                if (data.LoginStatus === "Can not login") {
                    setError("* Invalid Username or Password");
                } else {
                    setUserInfo(userInfoTransform(data));
                    navigate(redirectLink);
                }
            }
        }
    };

    const handleSignup = () => {
        navigate("/registration");
    };
    return (
        <div>
            <div className="decor"></div>
            <div className="loginBox">
                <div className="loginSection">
                    <div className="topic">Login</div>
                    <div className="loginDetails">
                        <div className="heading">Username</div>
                        <input
                            className="inputSection"
                            id="name"
                            type="name"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        ></input>

                        <div className="heading">Password</div>
                        <input
                            className="inputSection"
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </div>
                    <div className="buttons">
                        <button className="login" onClick={handleLogin}>
                            Login
                        </button>
                        <button className="signin" onClick={handleSignup}>
                            Signup
                        </button>
                    </div>
                </div>
                <div className="section">
                    <div className="logoSection">
                        <AiOutlineFile className="file" size={100} />
                        <FaSearch className="searching" size={30} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
