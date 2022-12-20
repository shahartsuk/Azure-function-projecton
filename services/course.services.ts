import { Course, ICourse } from "../models/course/course.model";

export const addCourse = async (course: any) => {
  let courseModel = new Course(course);
  await courseModel.save();
};

// find is pointer and gime me the Data lean help him
export const getCourse = async (): Promise<ICourse> => {
  return await Course.find().lean();
};
