const mongoose=require("mongoose");
const { Schema } = mongoose;

const marksSchema = new Schema({
    studentID: String,
    studentName: String,
    teacherName:String,
    subject:String,
    marks:Number 
});
exports.marks = mongoose.model('Marks', marksSchema);