export default {
    search(callback) {
        Genre.find().exec(callback)
    },
    getOne(id, callback) {
        Genre.findOne({
            _id: id
        }).exec(callback)
    },
    create(name, callback) {
        var genre = Genre({
            name: name
        })
        genre.save(callback)
    },
    edit(id, name, callback) {
        Genre.findOne({
            _id: id
        }).exec((err, data) => {
            data.name = name
            data.save(callback)
        })
    },
    delete(id, callback) {
        Genre.deleteOne({
            _id: id
        }).exec(callback)
    }
}
