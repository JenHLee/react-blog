import axios from "axios";
import { useEffect, useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function SideBar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCats(res.data);
        }
        getCats();
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">✦ About Me ✦</span>
                <img src={require("../../asset/img/aboutme1.jpg")} alt="About me"></img>
                <p>Hi, I'm Jennie! High level experience in Graphic Design and Fine Arts. Currently taking a Software Development diploma course, learning to become a full-stack developer.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">✦ Categories ✦</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link key={c.name} to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem" key={"c.name"}>{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">✦ Follow Us ✦</span>
                <div className="sidebarSocial">
                <a href="https://github.com/JenHLee"><i id="sidebarIcon1" className="sidebarIcon fa-brands fa-github-square"></i></a>
                <a href="https://instagram/bravehien">  <i id="sidebarIcon2" className="sidebarIcon fa-brands fa-instagram-square"></i></a>
                <a href="https://dribbble.com/JenHLee"> <i id="sidebarIcon3" className="sidebarIcon fa-brands fa-dribbble-square"></i></a>
                </div>
            </div>
        </div>
    )
}
