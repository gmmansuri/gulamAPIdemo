export default {
    search(callback) {
        Person.find().exec(callback)
    },
    getOne(id, callback) {
        Person.findOne({
            _id: id
        }).exec(callback)
    },
    create(name,dob,image, callback) {
        var person = Person({
            name: name,
            dob: dob,
            image:image

        })
        person.save(callback)
    },
    edit(id, name,dob,image, callback) {
        Person.findOne({
            _id: id
        }).exec((err, data) => {
            data.name = name
            data.dob =dob
            data.image=image
            data.save(callback)
        })
    },
    delete(id, callback) {
        Person.deleteOne({
            _id: id
        }).exec(callback)
    }
}