const router = Router()
router.get("/", (req, res) => {
    var genreData = []
    Genre.find().exec(res.callback)
})

router.get("/demo", function(req, res) {
    res.json({ demo: "this is a demo" })
})
router.get("/:id", (req, res) => {
    console.log(req.params)
    res.json({})
})
router.post("/", (req, res) => {
    var genre = Genre({
        name: req.body.name
    })
    genre.save(res.callback)
})
router.put("/:id", (req, res) => {})
router.delete("/:id", (req, res) => {})
export default router
