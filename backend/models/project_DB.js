const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const project_DBSchema = new Schema({
    title: {
        type: String, required: true
    },
    description: {
        abstract: { type: String, required: true },
        content: { type: String, required: true }
    },
    img: {
        type: Buffer
    },
    c_views: {
        likes: { type: Number, default: 0 },
        comments: [{ type: String }]
    },
    u_views: {
        likes: { type: Number, default: 0 },
        comments: [{ type: String }]
    },
    category: {
        type: String, required: true
    },
    subcategory: {
        type: String, required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('project_DB', project_DBSchema);
