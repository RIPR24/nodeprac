const { randomBytes, createCipheriv } = require("crypto");
const fs = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");

app.listen(3000, (err) => console.log(err | "yolo"));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sendreq = async (data) => {
  const res = await fetch("http://localhost:3001/req", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });
  const dat = await res.json();
  return dat;
};

const savePass = (email, pass) => {
  const num = randomBytes(16).toString("hex");
};
