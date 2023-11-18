const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const student = require("./Controller/student")
const teacher = require("./Controller/teacher")
const marks=require("./Controller/marks")
app.use(cors())
app.use(express.json())

// mongoDB connection 
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/tasks');
    console.log("database connected....")
}

// Api 
app.use("/student", student.router)
app.use("/teacher", teacher.router)
app.use("/marks",marks.router)

app.listen(4000, () => {
    console.log("Server Started......")
})