const mongoose = require('mongoose');

const schema = mongoose.Schema({
    roleName: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
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

class Roles extends mongoose.Model {

}


schema.loadClass(Roles);
module.exports = mongoose.model("roles", schema)