import React from "react";
import "./Widgets.scss";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
	const newsArticle = (heading, subtitle) => (
		<div className="widgets__article">
			<div className="widgets__articleLeft">
				<FiberManualRecordIcon className="icon" />
			</div>
			<div className="widgets__articleRight">
				<h5>{heading}</h5>
				<small>{subtitle}</small>
			</div>
		</div>
	);

	return (
		<div className="widgets">
			<div className="widgets__header">
				<h4>LinkedIn News</h4>
				<InfoIcon />
			</div>

			{newsArticle("Apple Music offer", "How to get six-month subscription for free in India")}
			{newsArticle("Why was Aditya-L1 launched?", "A closer look at India’s first mission to the Sun")}
			{newsArticle("OpenAI brings Canva plugin to ChatGPT", "Here's how to use")}
			{newsArticle("ISRO’s Mission Sun director Nigar Shaji", "Topper who chose engineering over medicine")}
		</div>
	);
}

export default Widgets;
