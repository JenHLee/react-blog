import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Context from "../../context/Context";
import "./singlePost.css";

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2]; //to get the userId (/post/userId) => [1] : post , [2] : userId
    const [post, setPost] = useState({});
    const PF = "http://localhost:5000/images/";
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getPost();
    }, [path]); //[parameter]


    const handleDelete = () => {
        try {
            axios.delete(`/posts/${post._id}`, {
                data: { username: user.username },
            });
            window.location.replace("/");
        } catch (err) { }
    }; //no need to use async, await 

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                username: user.username,
                title,
                desc,
            });
            //window.location.reload();
            setUpdateMode(false); //after finish the update setUpdateMode(false)
        
        } catch (err) { }
    };
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img
                        className="singlePostImg"
                        src={PF + post.photo}
                        alt="singlePostImg"
                    />
                )}
                {
                    updateMode ? (<input type="text"
                        value={title}
                        className="singlePostTitleInput"
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    ) : (
                        <h1 className="singlePostTitle">
                            {title}
                            {post.username === user?.username && (
                                <div className="singlePostEdit">
                                    <i className="singlePostIcon fa-solid fa-pen-to-square"
                                        id="singlePostIcon1"
                                        onClick={() => setUpdateMode(true)}>
                                    </i>
                                    <i className="singlePostIcon fa-solid fa-trash-can"
                                        id="singlePostIcon2"
                                        onClick={handleDelete}>
                                    </i>
                                </div>
                            )}
                        </h1>
                    )
                }
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author:
                        <Link to={`/?user=${post.username}`} className="link">
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">
                        {new Date(post.createdAt).toDateString()}
                    </span>
                </div>

                {updateMode ? (
                    <textarea
                        className="singlePostDescInput"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)} />
                ) : (
                    <p className="singlePostDesc">{desc}</p>
                )}
                {updateMode && (
                    <button className="singlePostButton" onClick={handleUpdate}>
                        Update
                    </button>
                )}
            </div>
        </div>
    );
}
