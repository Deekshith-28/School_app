const express = require("express")
const model = require("../Model-Schema/Student")
const Student = model.student
const model1=require("../Model-Schema/Marks")
const Marks=model1.marks
const router = express.Router()

router.post("/", async (req, res) => {
    
    let item = new Student(req.body)
   
    try {
        let doc = await item.save()
        let obj = { studentName: doc.name, studentID:doc._id }
        let item1 = new Marks(obj)
        let doc1=await item1.save()
        res.status(200).json(doc)
    } catch (err) {
        res.status(400).json(doc)
    }

})

router.get("/", async (req, res) => {
   
    try {
        let doc = await Student.find({})
        res.status(200).json(doc)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.put("/:id", async (req, res) => {
    try {
        let doc = await Student.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        res.status(200).json(doc)

    } catch (err) {
        res.status(400).json(err)
    }
})

router.delete("/:id", async (req, res) => {
    
    try {
        let doc = await Student.findOneAndDelete({ _id: req.params.id })
        res.status(200).json(doc)

    } catch (err) {
        res.status(400).json(err)
    }
})

exports.router = router
