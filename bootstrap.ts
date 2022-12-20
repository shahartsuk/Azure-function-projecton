import mongoose from "mongoose";

export const bootstrap = async (callBack: any) => {
  let dbName: string = "tsionet2022";
  let connectionString: string = `mongodb://localhost:27017/${dbName}`;
  await mongoose.connect(connectionString);
  callBack();
};
