import React from "react";
import "./Login.scss";
import { auth } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { Link, useNavigate } from "react-router-dom";

function Login({ password, setPassword, email, setEmail }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const loginToApp = (e) => {
		e.preventDefault();

		auth.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.user.displayName,
						profileUrl: userAuth.user.photoURL,
					})
				);
				navigate("/home");
			})
			.catch((error) => alert(error));
	};

	return (
		<div className="login">
			<img src="https://download.logo.wine/logo/LinkedIn/LinkedIn-Logo.wine.png" alt="LinkedIn Logo" />

			<form autoComplete="off">
				<div className="login__title">
					<h1>Sign in</h1>
					<p>Stay updated on your professional world</p>
				</div>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required={true}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					autoComplete="true"
				/>
				<button type="submit" onClick={loginToApp}>
					Sign In
				</button>
			</form>
			<p className="login__register">
				New to LinkedIn?{" "}
				<Link to="/">
					<span>Join now</span>
				</Link>
			</p>
		</div>
	);
}

export default Login;
