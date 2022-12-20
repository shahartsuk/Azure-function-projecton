import { bootstrap } from "./bootstrap";
import { getCourse } from "./services/course.services";
import express, { Request, Response } from "express";

const app = express();

const start = async () => {
  console.log("DB start");
  app.get("/courses", async (req: Request, res: Response) => {
    let courses = await getCourse();
    res.json(courses);
  });
  app.listen(3000, () => {
    console.log("server listening on 3000");
  });
  console.log("DB end");
};

bootstrap(start);
// let course = new Course({
//   title: "NodeJS course",
//   description: "nice course",
//   author: "Shahar",
//   tags: ["Mongoose", "Express"],
//   isPublish: true,
// });
// let courses = await getCourse();
//   console.log(courses);
