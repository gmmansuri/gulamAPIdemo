const router = Router()
router.get("/", function(req, res) {
    MovieModel.search(res.callback)
})

export default router
