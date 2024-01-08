const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const company_DBSchema = new Schema({
    company_email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        }
    },
    company_name: {
        type: String,
        required: true
    },
    jobtitle: {
        type: String
    },
    address: {
        city: {
            type: String
        },
        state: {
            type: String
        },
        country: {
            type: String
        }
    },
    company_website: {
        type: String
    }
});

module.exports = mongoose.model('Company_DB', company_DBSchema);
