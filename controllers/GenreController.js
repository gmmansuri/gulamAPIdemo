const router = Router()
router.get("/", (req, res) => {
    GenreModel.search(res.callback)
})
router.get("/:id", (req, res) => {
    GenreModel.getOne(req.params.id, res.callback)
})
router.post("/", (req, res) => {
    GenreModel.create(req.body.name, res.callback)
})
router.put("/:id", (req, res) => {
    GenreModel.edit(req.params.id, req.body.name, res.callback)
})
router.delete("/:id", (req, res) => {
    GenreModel.delete(req.params.id, res.callback)
})
export default router
