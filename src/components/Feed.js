import React, { useEffect, useState } from "react";
import "./Feed.scss";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalenderViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "../firebase/firebaseConfig";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Feed() {
	const user = useSelector(selectUser);
	const [input, setInput] = useState("");
	const [posts, setPosts] = useState([]);

	// Creating a firestore db collection
	useEffect(() => {
		// onSnapshot is a real-time listener
		db.collection("posts")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) =>
				// setting 'posts' state
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);
	}, []);

	const sendPost = (e) => {
		e.preventDefault();

		db.collection("posts").add({
			name: user?.displayName,
			description: user?.email,
			message: input,
			photoUrl: user.profileUrl || "https://ionicframework.com/docs/img/demos/avatar.svg",
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setInput(""); // clear input field after submit
	};

	const removePost = (id) => {
		db.collection("posts")
			.doc(id)
			.delete()
			.then(() => {
				console.log("Document successfully deleted!");
			})
			.catch((error) => {
				console.error("Error removing document: ", error);
			});
	};

	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<BorderColorIcon />
					<form>
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							type="text"
							placeholder="Start a post"
						/>
						<button onClick={sendPost} type="submit">
							Send
						</button>
					</form>
				</div>
				<div className="feed__inputOptions">
					<InputOption Icon={ImageIcon} title="Photo" />
					<InputOption Icon={SubscriptionsIcon} title="Video" />
					<InputOption Icon={EventNoteIcon} title="Event" />
					<InputOption Icon={CalenderViewDayIcon} title="Write article" />
				</div>
			</div>

			{posts.map(({ id, data: { name, description, message, photoUrl, timestamp } }) => (
				<Post
					key={id}
					name={name}
					description={description}
					message={message}
					imageSrc={photoUrl}
					timestamp={timestamp}
					onClick={() => {
						removePost(id);
					}}
				/>
			))}
		</div>
	);
}

export default Feed;
