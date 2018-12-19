var schema = new Schema({
    name: String,
    image: String,
    dob: Date
})
export default mongoose.model("Person", schema)
