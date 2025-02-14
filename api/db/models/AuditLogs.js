const mongoose = require('mongoose');

const schema = mongoose.Schema({
    level: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    propType: {
        type: String,
        required: true
    },
    log: {
        type: String,
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

class AuditLogs extends mongoose.Model {

}


schema.loadClass(AuditLogs);
module.exports = mongoose.model("auditLogs", schema)