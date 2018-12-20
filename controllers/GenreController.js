const router = Router()
router.get("/", (req, res) => {
    Genre.find().exec(res.callback)
})
router.get("/:id", (req, res) => {
    Genre.findOne({
        _id: req.params.id
    }).exec(res.callback)
})
router.post("/", (req, res) => {
    var genre = Genre({
        name: req.body.name
    })
    genre.save(res.callback)
})
router.put("/:id", (req, res) => {
    Genre.findOne({
        _id: req.params.id
    }).exec((err, data) => {
        data.name = req.body.name
        data.save(res.callback)
    })
})
router.delete("/:id", (req, res) => {
    Genre.deleteOne({
        _id: req.params.id
    }).exec(res.callback)
})
export default router
