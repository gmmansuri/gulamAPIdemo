import Movie from "../mongooseModel/Movie"

export default {
    search(callback) {
        Movie.find().exec(callback)
    },
    getOne(id, callback) {
        Movie.findOne({
            _id: id
        }).exec(callback)
    },
    create(data, callback) {
        var movie = Movie({
            name: data.name,
            image: data.image,
            year: data.year,
            rating: data.rating,
            director: data.director
        })
        movie.save(callback)
    },
    edit(data, callback) {
        Movie.findOne({
            _id: data.id
        }).exec(function(err, result) {
            result.name = data.name
            result.image = data.image
            result.year = data.year
            result.rating = data.rating
            result.director = data.director
            result.save(callback)
        })
    },
    delete(id, callback) {
        Movie.deleteOne({
            _id: id
        }).exec(callback)
    }
}
