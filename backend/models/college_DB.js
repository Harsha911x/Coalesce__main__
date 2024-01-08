const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const college_DBSchema = new Schema({
    profileImage: {
        type: Buffer
    },
    college_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: String, // Assuming contact is a string, you may use Number if it's a number
        required: true
    },
    address: {
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        pincode: {
            type: String,
            required: true
        }
    },
    website_link: {
        type: String
    },
    about: {
        type: String
    },
    projects: [
        {
            type: Schema.Types.ObjectId,
            ref: 'project_DB'
        }
    ]
});

module.exports = mongoose.model('College_DB', college_DBSchema);
