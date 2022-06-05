import React from 'react';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/";

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-github-square"></i>
                <i className="topIcon fa-brands fa-instagram-square"></i>
                <i className="topIcon fa-brands fa-dribbble-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem" id="listItemFirst">
                        <Link className="link" to="/"> HOME</Link>
                    </li>
                    <li className="topListItem" id="listItemSecond">
                        <Link className="link" to="/about"> ABOUT</Link>
                    </li>
                    <li className="topListItem" id="listItemThird">
                        <Link className="link" to="/contact"> CONTACT
                        </Link>
                    </li>
                    <li className="topListItem" id="listItemFourth">
                        <Link className="link" to="/write"> WRITE
                        </Link>
                    </li>{user ? (
                        <li className="topListItem" id="listItemLast">
                            <span className="link" onClick={handleLogout}>{user && "LOGOUT"}</span>
                        </li>
                    ) : (
                        <li className="topListItem" id="listItemLast">
                            <Link className="link" to="/login">LOGIN</Link>
                        </li>
                    )
                    }
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link to="/settings">
                        <img className="topImg"
                            //src={require("../../asset/img/profile.jpg")}
                            //src={user.profilePic}
                            src={PF + user.profilePic}
                            alt="" />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/register">REGISTER</Link>
                        </li>
                    </ul>
                )
                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
