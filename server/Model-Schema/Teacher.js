const mongoose=require("mongoose")
const { Schema } = mongoose;

const teacherSchema = new Schema({
    name: String,
    subject: String
});
exports.teacher = mongoose.model('Teacher', teacherSchema);