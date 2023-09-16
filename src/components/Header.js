import React from "react";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase/firebaseConfig";
import { logout, selectUser } from "../features/userSlice";
import { Link } from "react-router-dom";

function Header({ setFirstName, setLastName, setPassword, setEmail, setProfilePic }) {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	const logoutFromApp = () => {
		dispatch(logout());
		auth.signOut();
		setFirstName("");
		setLastName("");
		setEmail("");
		setPassword("");
		setProfilePic("");
	};

	return (
		<div className="header">
			<div className="header__left">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
					alt="Linkedin Logo"
				/>

				<div className="header__search">
					<SearchIcon className="searchIcon" />
					<input type="text" />
				</div>
			</div>
			<div className="header__right">
				<HeaderOption Icon={HomeIcon} title="Home" />
				<HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
				<HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
				<HeaderOption Icon={ChatIcon} title="Messages" />
				<HeaderOption Icon={NotificationsIcon} title="Notifications" />
				<Link to="/login">
					<HeaderOption avatar={user?.profileUrl} title="Logout" onClick={logoutFromApp} />
				</Link>
			</div>
		</div>
	);
}

export default Header;
