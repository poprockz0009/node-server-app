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

app.use(
  cors({
    credentials: true,
    origin: "https://a6--magnificent-cascaron-573110.netlify.app",
  })
);
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));

// configure server session after cors
// this is a default session configuration that works fine
// locally, but needs to be tweaked further to work in a
// remote server such as AWS, Render, or Heroku. See later

import mongoose from "mongoose";
import UserRoutes from "././Users/routes.js";

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";

mongoose
  .connect(
    "mongodb+srv://paprockin:Poprockz0009!!@kanbascluster.87ktvji.mongodb.net/?retryWrites=true&w=majority&appName=KanbasCluster",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use(express.json());

ModuleRoutes(app);
CourseRoutes(app);
UserRoutes(app);

Lab5(app);
Hello(app);

app.listen(process.env.PORT || 4000, () => {
  console.log("app is running");
});

// app.listen(4000);

// app.get("/hello", (req, res) => {
//   res.send("Life is good!");
// });
// app.get("/", (req, res) => {
//   res.send("Welcome to Full Stack Development!");
// });
