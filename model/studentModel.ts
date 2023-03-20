import mongoose from "mongoose";

type Student = {
  name: string;
  color: string;
  height: number;
  short: boolean;
};

interface St extends Student, mongoose.Document {}

const studentModel = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    color: {
      type: String,
    },
    height: {
      type: Number,
    },
    short: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model<St>("user", studentModel);
