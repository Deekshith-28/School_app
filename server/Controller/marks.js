const express = require("express")
const model1 = require("../Model-Schema/Marks")
const Marks = model1.marks
const router = express.Router()

router.post("/", async (req, res) => {

    let item = new Marks(req.body)

    try {
        let doc = await item.save()
        res.status(200).json(doc)
    } catch (err) {
        res.status(400).json(doc)
    }

})

router.get("/", async (req, res) => {
   
    try {
        let doc = await Marks.find({})
        res.status(200).json(doc)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.put("/:id", async (req, res) => {
    
    try {
        let doc = await Marks.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        res.status(200).json(doc)

    } catch (err) {
        res.status(400).json(err)
    }
})


exports.router = router
