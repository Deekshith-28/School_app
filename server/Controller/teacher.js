const express = require("express")
const model = require("../Model-Schema/Teacher")
const Teacher = model.teacher
const router = express.Router()

router.post("/", async (req, res) => {
    let item = new Teacher(req.body)
    try {
        let doc = await item.save()
        res.status(200).json(doc)
    } catch (err) {
        res.status(400).json(doc)
    }

})

router.get("/", async (req, res) => {
    try {
        let doc = await Teacher.find({})
        res.status(200).json(doc)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.put("/:id", async (req, res) => {
    try {
        let doc = await Teacher.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        res.status(200).json(doc)

    } catch (err) {
        res.status(400).json(err)
    }
})

router.delete("/:id", async (req, res) => {
  
    try {
        let doc = await Teacher.findOneAndDelete({ _id: req.params.id })
        res.status(200).json(doc)

    } catch (err) {
        res.status(400).json(err)
    }
})

exports.router = router
