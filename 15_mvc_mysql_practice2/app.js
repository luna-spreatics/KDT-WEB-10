const express = require("express");
const app = express();
const PORT = 8001;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// [라우터 분리]
app.get("/", (req, res) => {
  res.render("index");
});

const userRouter = require("./routes/user");
app.use("/user", userRouter);

// [404 error] 맨 마지막 라우트로 선언 -> 나머지 코드 무시되기 때문!!
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
