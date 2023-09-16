import React from "react";
import "./InputOption.scss";

function InputOption({ Icon, title, onClick, iconcolor, fontcolor }) {
	return (
		<div className="inputOption" onClick={onClick}>
			<Icon style={{ color: iconcolor }} className="inputOption__icon" />
			<h5 style={{ color: fontcolor }}>{title}</h5>
		</div>
	);
}

export default InputOption;
