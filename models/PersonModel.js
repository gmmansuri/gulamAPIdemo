export default {
    search(callback) {
        Person.find().exec(callback)
    },
    getOne(id, callback) {
        Person.findOne({
            _id: id
        }).exec(callback)
    },
    create(name, dob, image, callback) {
        var obj = {
            name: name,
            image: image
        }
        if (dob) {
            obj.dob = dob
        }
        var person = Person(obj)
        person.save(callback)
    },
    edit(id, name, image, dob, callback) {
        Person.findOne({
            _id: id
        }).exec((err, data) => {
            data.name = name
            data.dob = dob
            data.image = image
            data.save(callback)
        })
    },
    delete(id, callback) {
        Person.deleteOne({
            _id: id
        }).exec(callback)
    }
}
