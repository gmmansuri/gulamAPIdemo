export default {
    search(callback) {
        User.find().exec(callback)
    },
    getOne(id, callback) {
        Person.findOne({
            _id: id
        }).exec(callback)
    },
    create(name,email,password,callback) {
        var user = User({
           name: name,
           email:email,
           password:password,
        })
        user.save(callback)
    },
    edit(id, name, email,password,callback) {
        User.findOne({
            _id: id
        }).exec((err, data) => {
            data.name = name
            data.email=email,
            data.password=password
            data.save(callback)
        })
    },
    delete(id, callback) {
        User.deleteOne({
            _id: id
        }).exec(callback)
    }
}