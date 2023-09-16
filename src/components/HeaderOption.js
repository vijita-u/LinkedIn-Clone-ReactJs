import React from "react";
import "./HeaderOption.scss";

function HeaderOption({ avatar, Icon, title, onClick }) {
	return (
		<div onClick={onClick} className="headerOption">
			{Icon && <Icon className="headerOption__icon" />}
			{avatar && <img className="headerOption__avatar" src={avatar} />}
			<h5 className="headerOption__title">{title}</h5>
		</div>
	);
}

export default HeaderOption;
