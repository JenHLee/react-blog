import "./settings.css";
import SideBar from "../../components/sidebar/SideBar";

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">

                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img className="topImg"
                            src={require("../../asset/img/profile.jpg")}
                            alt="profile" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="name" />
                    <label>Email</label>
                    <input type="email" placeholder="name@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <SideBar />
        </div>
    )
}

