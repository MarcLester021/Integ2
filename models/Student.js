import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true},
    id: { type: Number, required: true, unique: true },
    //password
}, { timestamps: true });

export default mongoose.model("Student", studentSchema);