import React, { useState, forwardRef, useEffect } from "react";
import "./Post.scss";
import InputOption from "./InputOption";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Post({ name, description, imageSrc, message, onClick, open, onClose, handleDelete }) {
	const [clicked, setClicked] = useState(false);

	const changeActiveIcon = () => {
		setClicked(!clicked);
	};

	return (
		<div className="post">
			<div className="post__delete" onClick={onClick}>
				<DeleteForeverIcon className="deleteIcon" />
			</div>

			<div className="post__header">
				<img className="post__avatar" src={imageSrc} alt="profile avatar" />
				<div className="post__info">
					<h4>{name}</h4>
					<small>{description}</small>
				</div>
			</div>

			<div className="post__body">
				<p>{message}</p>
			</div>

			<div className="post__buttons">
				<InputOption
					Icon={clicked ? ThumbUpIcon : ThumbUpOutlinedIcon}
					title={clicked ? "Unlike" : "Like"}
					onClick={changeActiveIcon}
					iconcolor={clicked ? "#0a66c2" : "darkgray"}
					fontcolor={clicked ? "#0a66c2" : "#686868"}
				/>
				<InputOption Icon={ModeCommentOutlinedIcon} title="Comment" />
				<InputOption Icon={ShareOutlinedIcon} title="Share" />
				<InputOption Icon={SendOutlinedIcon} title="Send" />
			</div>
		</div>
	);
}

export default Post;
