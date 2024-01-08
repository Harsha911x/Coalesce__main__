const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const data_baseSchema = new Schema({
    username: {
        type: String, required: true
    },
    name: {
        type: String, required: true
    },
    email: {
        type: String, required: true
    },
    contact: {
        type: Number, required: true
    },
    gender: {
        type: String, required: true
    },
    education: [{
        Degree: { type: String, required: true },
        Program: { type: String, required: true },
        Graduating_year: { type: Number, required: true }
    }],
    password: {
        type: String, required: true
    },
    profileImage: {
        type: Buffer
    },
    certifications: [{
        description: { type: String },
        img: { type: Buffer }, // Assuming you want to store image data as a Buffer
        link: { type: String } // Assuming you want to store a URL/link
    }],
    projects: [
        {
            type: Schema.Types.ObjectId,
            ref: 'project_DB'
        } 
    ]
}, { timestamps: true });

const UserModel = mongoose.model('User', data_baseSchema);

module.exports = UserModel;
