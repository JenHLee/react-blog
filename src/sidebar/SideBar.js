import "./sidebar.css"

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">✦ ABOUT ME ✦</span>
                <img src={require("../asset/img/aboutme.jpg")} alt="About me"></img>
                <p>Hi, I'm Jennie! High level experience in Graphic Design and Fine Arts. Currently taking a Software Development diploma course, learning to become a full-stack developer.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">✦ CATEGORIES ✦</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Design</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">✦ FOLLOW US ✦</span>
                <div className="sidebarSocial">
                    <i id="sidebarIcon1" className="sidebarIcon fa-brands fa-github-square"></i>
                    <i id="sidebarIcon2" className="sidebarIcon fa-brands fa-instagram-square"></i>
                    <i id="sidebarIcon3" className="sidebarIcon fa-brands fa-dribbble-square"></i>
                </div>
            </div>
        </div>
    )
}
