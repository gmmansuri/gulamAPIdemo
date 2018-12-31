import { CreateFileError } from "external-editor"

const router = Router()
router.get("/", function(req, res) {
    MovieModel.search(res.callback)
})
router.post("/", function(req, res) {
    MovieModel.create(req.body, res.callback)
})
router.put("/edit/:id", function(req, res) {
    MovieModel.edit(req.body, res.callback)
})
router.delete("/:id",function(req,res){
    MovieModel.delete(req.params.id , res.callback)
})
export default router
