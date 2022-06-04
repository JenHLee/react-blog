import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2]; //to get the userId (/post/userId) => [1] : post , [2] : userId
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
        };
        getPost();
    }, [path]);
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img
                        className="singlePostImg"
                        src={post.photo}
                        alt="singlePostImg"
                    />
                )}
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square" id="singlePostIcon1"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can" id="singlePostIcon2"></i>
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author:
                        <Link to={`/?user=${post.username}`} className="link">
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">{post.desc}</p>
            </div>
        </div>
    );
}
