import "./singlePost.css";

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src={require("../../asset/img/bg0.jpg")} alt="singlePostImg" />

                <h1 className="singlePostTitle">post Title
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square" id="singlePostIcon1"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can" id="singlePostIcon2"></i>
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Jennie</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p>table contents long</p>
            </div>
        </div>
    )
}
