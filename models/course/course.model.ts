import mongoose, { ObjectId } from "mongoose";
import { CourseSchema } from "./course.schema";
//Model compile our schema in order
//to create instance based on this model in MongoDB
//sql adapter

export interface ICourse {
  _id?: ObjectId;
  title: String;
  description: String;
  author: String;
  tags: [String];
  date?: Date;
  isPublish: Boolean;
}
export const Course = mongoose.model<ICourse[]>("Course", CourseSchema);
