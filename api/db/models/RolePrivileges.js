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
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
}
)

class RolePrivileges extends mongoose.Model {

}


schema.loadClass(RolePrivileges);
module.exports = mongoose.model("rolePrivileges", schema)