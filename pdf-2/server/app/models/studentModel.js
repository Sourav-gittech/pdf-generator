const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    family_details: {
        father_name: {
            type: String,
            require: true
        },
        mother_name: {
            type: String,
            require: true
        },
        local_gurdian_name: {
            type: String,
            require: true
        },
        gurdian_contact_no: {
            type: String,
            require: true
        }
    },
    address: {
        street: {
            type: String,
            require: true
        },
        city: {
            type: String,
            require: true
        },
        full_address: {
            type: String,
            require: true
        },
        country: {
            type: String,
            require: true
        },
        pin: {
            type: String,
            require: true
        }
    }
})

const studentModel = mongoose.model('studentDetail', studentSchema);

module.exports = studentModel;