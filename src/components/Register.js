import React, { useState } from "react";
import "./Register.scss";
import { auth } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { Link, useNavigate } from "react-router-dom";

function Register({
	firstName,
	setFirstName,
	lastName,
	setLastName,
	password,
	setPassword,
	email,
	setEmail,
	profilePic,
	setProfilePic,
}) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const register = (e) => {
		e.preventDefault();

		if (!firstName) {
			return alert("Please provide name before proceeding");
		}
		if (!lastName) {
			return alert("Please provide last name before proceeding");
		}

		auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
			userAuth.user
				.updateProfile({
					displayName: `${firstName} ${lastName}`,
					photoURL: profilePic || "https://ionicframework.com/docs/img/demos/avatar.svg",
				})
				.then(() => {
					// dispatch(
					// 	login({
					// 		email: userAuth.user.email,
					// 		uid: userAuth.user.uid,
					// 		displayName: `${firstName} ${lastName}`,
					// 		photoURL: profilePic || "https://ionicframework.com/docs/img/demos/avatar.svg",
					// 	})
					// );
					setPassword("");
					navigate("/login");
				})
				.catch((error) => alert(error.message));
		});
	};

	return (
		<div className="register">
			<img src="https://download.logo.wine/logo/LinkedIn/LinkedIn-Logo.wine.png" alt="LinkedIn Logo" />

			<div className="register__title">
				<h1>Make the most of your professional life</h1>
			</div>
			<form autoComplete="off">
				<div className="register__inputField">
					<h5>First Name</h5>
					<input
						type="text"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						required={true}
					/>
				</div>
				<div className="register__inputField">
					<h5>Last Name</h5>
					<input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required={true} />
				</div>
				<div className="register__inputField">
					<h5>Profile pic URL (optional)</h5>
					<input type="text" value={profilePic} onChange={(e) => setProfilePic(e.target.value)} />
				</div>
				<div className="register__inputField">
					<h5>Email</h5>
					<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required={true} />
				</div>
				<div className="register__inputField">
					<h5>Password (6+ characters)</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						autoComplete="true"
					/>
				</div>

				<small className="register__terms">
					By clicking Agree & Join, you agree to the LinkedIn <span>User Agreement</span>,{" "}
					<span>Privacy Policy</span>, and <span>Cookie Policy</span>.
				</small>
				<button type="submit" onClick={register}>
					Agree & Join
				</button>
				<p className="register__signIn">
					Already on LinkedIn?{" "}
					<Link to="/login">
						<span>Sign in</span>
					</Link>
				</p>
			</form>
		</div>
	);
}

export default Register;
