const router = Router()
router.get("/", (req, res) => {
    GenreModel.search(res.callback)
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
        GenreModel.getOne(req.params.id, res.callback)
    }
)
router.post(
    "/create",
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
        GenreModel.create(req.bod, res.callback)
    }
)
router.put(
    "edit/:id",
    ValidateRequest({
        body: {
            type: "object",
            properties: {
                name: {
                    type: "string"
                }
            }
        },
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
        GenreModel.edit(req.params.id, req.body.name, res.callback)
    }
)
router.delete(
    "delete/:id",
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
        GenreModel.delete(req.params.id, res.callback)
    }
)
export default router
