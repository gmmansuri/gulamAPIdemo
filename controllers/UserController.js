const router = Router()
router.get("/", function(req, res) {
    UserModel.search(res.callback)
    console.log("i am in user controller")
})

router.get("/:id", function(req, res) {
    UserModel.getOne(res.params.id, rea.callback)
})

router.post("/", function(req, res) {
    UserModel.create(req.body.name, req.callback)
})

router.put("/", function(req, res) {
    UserModel.edit(
        req.params.name,
        req.params.email,
        req.params.password,
        req.callback
    )
})

router.delete("/:id", function(req, res) {
    UserModel.delete(req.params.id, req.callback)
})
export default router
