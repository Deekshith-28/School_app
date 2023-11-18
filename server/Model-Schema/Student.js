const mongoose=require("mongoose")
const { Schema } = mongoose;

const studentSchema = new Schema({
    name: String, 
    
});
exports.student = mongoose.model('Student', studentSchema);