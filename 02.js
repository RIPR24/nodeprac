const express = require("express");
const app = express();

app.listen(3001, (err) => console.log(err));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sendreq = async (data) => {
  const res = await fetch("http://localhost:3000/req", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });
  const dat = await res.json();
  return dat;
};
