import React, { useState } from "react";
import "./Sidebar.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import HistoryIcon from "@mui/icons-material/History";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

function Sidebar() {
	const user = useSelector(selectUser);
	const [clicked, setClicked] = useState(false);

	const recentItem = (topic) => (
		<div className="sidebar__recentItem">
			<HistoryIcon className="sidebar__historyIcon" />
			<span>{topic}</span>
		</div>
	);

	const changeArrowICon = () => {
		setClicked(!clicked);
	};

	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img
					className="sidebar__backdrop"
					src="https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
					alt="sidebar backdrop"
				/>
				<img className="sidebar__avatar" src={user?.profileUrl} alt="profile avatar" />
				<h3>{user?.displayName}</h3>
				<h5>{user?.email}</h5>
			</div>

			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p> Who viewed your profile</p>
					<p className="sidebar__statNumber">678</p>
				</div>
				<div className="sidebar__stat">
					<p>Views on post</p>
					<p className="sidebar__statNumber">298</p>
				</div>
			</div>
			<input type="checkbox" id="stats" className="stats" />
			<label htmlFor="stats">
				<div className="stats__showMore" onClick={changeArrowICon}>
					<p>Show more</p>

					{clicked ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
				</div>
			</label>
			<div className="sidebar__bottom">
				<div className="sidebar__section">
					<p>Recent</p>
					{recentItem("reactjs")}
					{recentItem("programming")}
					{recentItem("softwareengineering")}
					{recentItem("design")}
					{recentItem("develop")}
				</div>
				<div className="sidebar__section">
					<p className="sidebar__heading">Followed Hashtags</p>
					{recentItem("reactjs")}
					{recentItem("programming")}
					{recentItem("softwareengineering")}
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
