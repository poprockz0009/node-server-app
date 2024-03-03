import express from "express";
import Hello from "./hello.js";
import CourseRoutes from "./Courses/routes.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import ModuleRoutes from "./Modules/routes.js";
import "dotenv/config";
import session from "express-session";

// import the new dotenv library to read .env file
// use different front end URL in dev and in production

const app = express();

app.use(cors());
app.use(express.json());

ModuleRoutes(app);
CourseRoutes(app);

Lab5(app);
Hello(app);

app.listen(process.env.PORT || 4000);

// app.listen(4000);

// app.get("/hello", (req, res) => {
//   res.send("Life is good!");
// });
// app.get("/", (req, res) => {
//   res.send("Welcome to Full Stack Development!");
// });
