//import Movie from "../mongooseModel/Movie";

export default {
    search(callback) {
        Movie.find().exec(callback)
    },
    getOne(id, callback) {
        Movie.findOne({
            _id: id
        }).exec(callback)
    },
    create(name,image,year,rating,director, callback) {
        var movie = Movie({
            name: name,
            image:image,
            year:year,
            rating:rating,
            director:director

        })
        movie.save(callback)
    },
    edit(id, name,image,year,rating, callback) {
        Person.findOne({
            _id: id
        }).exec((err, data) => {
            data.name = name
            data.image=image
            data.year=year
            data.rating=rating
            data.director=director

            data.save(callback)
        })
    },
    delete(id, callback) {
        Movie.deleteOne({
            _id: id
        }).exec(callback)
    }
}