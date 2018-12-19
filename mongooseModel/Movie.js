var schema = new Schema({
    name: String,
    image: String,
    year: Number,
    rating: Number,
    director: [
        {
            type: ObjectId,
            ref: "Person"
        }
    ],
    description: String,
    genre: {
        type: ObjectId,
        ref: "Genre"
    },
    actor: [
        {
            type: ObjectId,
            ref: "Person"
        }
    ]
})
export default mongoose.model("Movie", schema)
