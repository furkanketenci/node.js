const mongoose = require('mongoose');

const schema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    firstName: String,
    lastName: String,
    phoneNumber: String
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
}
)

class Users extends mongoose.Model {

}


schema.loadClass(Users);
module.exports = mongoose.model("users", schema)