// import PersonModel from "../models/PersonModel";

const router = Router()
router.get("/", (req, res) => {
    PersonModel.search(res.callback)
})
router.get(
    "/:id",
    ValidateRequest({
        params: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    format: "objectId"
                }
            }
        }
    }),
    (req, res) => {
        PersonModel.getOne(req.params.id, res.callback)
    }
)
router.post(
    "/",
    ValidateRequest({
        body: {
            type: "object",
            properties: {
                name: {
                    type: "string"
                }
            }
        }
    }),

    (req, res) => {
        PersonModel.create(req.body.name, false, "", res.callback)
    }
)
router.put("/:id", (req, res) => {
    PersonModel.edit(req.params.id, req.body.name, false, "", res.callback)
})
router.delete(
    "/:id",
    ValidateRequest({
        params: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    format: "objectId"
                }
            }
        }
    }),
    (req, res) => {
        PersonModel.delete(req.params.id, res.callback)
    }
)
export default router
