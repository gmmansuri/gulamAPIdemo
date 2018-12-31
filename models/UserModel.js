//import Movie from "../mongooseModel/Movie"

//import User from "../mangooseModel/User"
export default {
    search(callback) {
        User.find().exec(callback)
    },
    getOne(id, callback) {
        User.findOne({
            _id: id
        }).exec(callback)
    },

    create(data, callback) {
        var obj = {
            name: data.name,
            email: data.email,
            password: data.password,
            resetTocken: data.resetTocken,
            resetTokenExpiry: data.resetTokenExpiry,
            accessToken: data.accessToken,
            favourites: data.favourites,
            accessLevel: data.accessLevel
        }
        var user = User(obj)
        user.save(callback)
    },
    edit(data, callback) {
        User.findOne({
            _id: data.id
        }).exec(function(err, result) {
            result.name = data.name
            result.email = data.email
            result.password = data.password
            result.save(callback)
        })
    },
    addToFavourite(data, callback) {
        User.findOne({
            _id: data.id
        }).exec(function(err, result) {
            result.favourites.push(data.favourites)
            result.save(callback)
        })
    },

    addToFavouritesUniqe(data, callback) {
        User.update(
            { _id: data.id },
            { $addToSet: { favourites: data.favourites } }
        ).exec(callback)
    },

    removeToFavourite(data, callback) {
        User.update(
            { _id: data.user },
            { $pull: { favourites: data.favourites } }
        ).exec(callback)
    },

    dummyPopulate(data, callback) {
        User.findOne({
            _id: data.id
        })
            .populate("favourites")
            .exec(function(err, result) {
                if (err) {
                    callback(err)
                } else {
                    callback(null, result.favourites)
                }
            })
    },

    delete(id, callback) {
        User.deleteOne({
            _id: id
        }).exec(callback)
    }
}
