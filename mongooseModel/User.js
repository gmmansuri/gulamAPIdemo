
var schema = new Schema({
    name: String,
    email: { type: String, unqiue: true, validate: validators.isEmail() },
    password: String,
    resetToken: String,
    resetTokenExpiry: { type: Date },
    accessToken: { type: String },
    favourites: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movie"
        }
    ],
    accessLevel: {
        type: String,
        enum: ["Admin", "User"]
    }
})
export default mongoose.model("User", schema)
