import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import Menu from "../components/Menu";
import { useAuthContext } from "../contexts/authContext";

function Single() {
  const [post, setPost] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2];
  const { currentUser } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/posts/" + postId
        );
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete("http://localhost:8800/api/posts/" + postId, {
        withCredentials: true,
        credentials: "include",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  return (
    <div className="Single">
      <div className="content">
        <img src={`../upload/${post.img}`} alt="" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {post.username === currentUser.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} onClick={handleDelete} alt="" />
            </div>
          )}
        </div>

        <h1>{post.title}</h1>
        <div>{getText(post.desc)}</div>
      </div>
      <Menu cat={post.cat} />
    </div>
  );
}

export default Single;
