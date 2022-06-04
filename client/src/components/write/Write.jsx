import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import "./write.css";

export default function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState("");
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
        };
        if (file) {
            const data = FormData();
            const filename = Date.now() + file.name; //create new file name using date (random)
            data.append("name", filename);
            data.append("file", file);
            try {
                await axios.post("/upload", data);
            } catch (err) {
            }
        }
        try {
            const res = await axios.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id);
        } catch (err) {

        }
    }
    return (
        <div className="write">
            {file && (
                <img
                    className="writeImg"
                    src={'http://localhost:3000' + URL.createObjectURL(file)}
                    alt=""
                />
            )}
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>


                <div className="writeFormGroup">

                    <textarea placeholder="Tell your story..."
                        type="text"
                        className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit" type="submit">Publish</button>


            </form>
        </div>
    );
}