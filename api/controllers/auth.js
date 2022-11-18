import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  //Check existing user
  const q = "SELECT * FROM users WHERE email = ? OR username = ? ";
  const { email, username, password } = req.body;

  db.query(q, [email, username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already exists!");
    // hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const q = "INSERT INTO users (email, username, password) VALUES (?)";
    const values = [email, username, hash];
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json("User have been registered");
    });
  });
};

export const login = (req, res) => {
  const { username, password } = req.body;

  const q = "SELECT * FROM users WHERE username = ?";
  db.query(q, [username], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    //Check password
    const isPasswordValid = bcrypt.compareSync(password, data[0].password);
    if (!isPasswordValid) return res.status(400).json("Wrong password!");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { pw, ...other } = data[0];
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {
  res.clearCookie("access_token").status(200).json("User has been logged out!");
};
