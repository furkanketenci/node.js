const mongoose = require('mongoose');

const schema = mongoose.Schema({
    roleId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    permission: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },


}, {
    versionKey: false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
}
)

class UserRoles extends mongoose.Model {

}


schema.loadClass(UserRoles);
module.exports = mongoose.model("userRoles", schema)