const mongoose = require('mongoose');

const notebookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.models.Notebook || mongoose.model('Notebook', notebookSchema);
