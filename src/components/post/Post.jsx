import "./post.css"

export default function post() {
    return (
        <div className='post'>
            <img className="postImg" src={require("../../asset/img/bg0.jpg")} alt="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    postTitle
                </span>
                <hr />

                <span className="postDate">1 hour ago</span>
                <p className="postDesc">content table React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.</p>
            </div>
        </div>
    )
}
