import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

function Write() {
  const state = useLocation().state;
  const [title, setTitle] = useState(state?.title || "");
  const [value, setValue] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();

  const upload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post("http://localhost:8800/api/upload", formData);
    return res.data;
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      state.id
        ? await axios.put(
            "http://localhost:8800/api/posts/" + state.id,
            {
              title,
              desc: value,
              cat,
              img: file ? imgUrl : "",
            },
            {
              withCredentials: true,
              credentials: "include",
            }
          )
        : await axios.post(
            "http://localhost:8800/api/posts",
            {
              title,
              desc: value,
              cat,
              img: file ? imgUrl : "",
              date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            },
            {
              withCredentials: true,
              credentials: "include",
            }
          );
      navigate("/");
    } catch (error) {}
  };

  return (
    <div className="Write">
      <div className="content">
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>

          <span>
            <b>Status: </b> Draft
          </span>

          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload File
          </label>

          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>

        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "art"}
              onChange={(e) => setCat(e.target.value)}
              name="cat"
              id="art"
              value={"art"}
            />
            <label htmlFor="art">art</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "science"}
              onChange={(e) => setCat(e.target.value)}
              name="cat"
              id="science"
              value={"science"}
            />
            <label htmlFor="science">science</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "technology"}
              onChange={(e) => setCat(e.target.value)}
              name="cat"
              id="technology"
              value={"technology"}
            />
            <label htmlFor="technology">technology</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "cinema"}
              onChange={(e) => setCat(e.target.value)}
              name="cat"
              id="cinema"
              value={"cinema"}
            />
            <label htmlFor="cinema">cinema</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "design"}
              onChange={(e) => setCat(e.target.value)}
              name="cat"
              id="design"
              value={"design"}
            />
            <label htmlFor="design">design</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "food"}
              onChange={(e) => setCat(e.target.value)}
              name="cat"
              id="food"
              value={"food"}
            />
            <label htmlFor="food">food</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
