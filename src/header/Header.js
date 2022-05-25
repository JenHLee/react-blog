import "./header.css"

export default function () {
    return (
        <div className='header'>
            <div className='headerTitles'>
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src={require("../asset/img/bg0.jpg")} alt="headerImg" />
        </div>
    )
}
