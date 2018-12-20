var schema = new Schema({
    name: { type: String, required: true }
})
export default mongoose.model("Genre", schema)
