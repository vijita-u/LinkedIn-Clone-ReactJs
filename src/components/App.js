import React, { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../features/userSlice";
import Login from "./Login";
import Register from "./Register";
import { auth } from "../firebase/firebaseConfig";
import Widgets from "./Widgets";

function App() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [profilePic, setProfilePic] = useState("");
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				// user is logged in
				dispatch(
					login({
						email: user.email,
						uid: user.uid,
						displayName: user.displayName,
						profileUrl: user.photoURL,
					})
				);
			} else {
				// user is logged out
				dispatch(logout());
			}
		});
	}, []);

	return (
		<Router>
			<div className="app">
				<Routes>
					<Route
						path="/home"
						element={
							<>
								<Header
									setFirstName={setFirstName}
									setLastName={setLastName}
									setEmail={setEmail}
									setPassword={setPassword}
									setProfilePic={setProfilePic}
								/>
								<div className="app__body">
									<Sidebar />
									<Feed />
									<Widgets />
								</div>
							</>
						}
					/>
					<Route
						path="/login"
						element={
							<Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
						}
					/>
					<Route
						path="/"
						element={
							<>
								<Register
									firstName={firstName}
									setFirstName={setFirstName}
									lastName={lastName}
									setLastName={setLastName}
									email={email}
									setEmail={setEmail}
									password={password}
									setPassword={setPassword}
									profilePic={profilePic}
									setProfilePic={setProfilePic}
								/>
							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
