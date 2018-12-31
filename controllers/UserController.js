import User from "../mongooseModel/User"
import UserModel from "../models/UserModel"

const router = Router()
router.get("/", function(req, res) {
    UserModel.search(res.callback)
})

router.get("/:id", function(req, res) {
    UserModel.getOne(req.params.id, res.callback)
})

router.post("/", function(req, res) {
    UserModel.create(req.body, res.callback)
})

router.put("/edit", function(req, res) {
    UserModel.edit(req.body, res.callback)
})
router.put("/addToFavourite", function(req, res) {
    UserModel.addToFavourite(req.body, res.callback)
})
router.put("/addToFavouritesUniqe", function(req, res) {
    UserModel.addToFavouritesUniqe(req.body, res.callback)
})

router.put("/removeToFavourite", function(req, res) {
    UserModel.removeToFavourite(req.body, res.callback)
})

router.put("/dummyPopulate", function(req, res) {
    UserModel.dummyPopulate(req.body, res.callback)
})

router.delete("/delete/:id", function(req, res) {
    UserModel.delete(req.params.id, res.callback)
})
export default router
