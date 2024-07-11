import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "pug");//view engine 설정
app.set("views", __dirname + "/views");//express에 template이 어디 있는지 지정
app.use("/public", express.static(__dirname + "/public"));//public url 생성 유저에게 파일 공유
app.get("/", (req, res) => {res.render("home")}); // home.pug를 랜더해주는 라우터 생성
app.get("/*", (req, res) => {res.redirect("/")});



const handleListen = () => console.log('Listening on http://localhost:' + port)
app.listen(port, handleListen);