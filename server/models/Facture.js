const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const factureSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String
    },
    images: {
        type: Array,
        default: []
    },
}, { timestamps: true })


factureSchema.index({ 
    title:'text',
    description: 'text',
}, {
    weights: {
        name: 5,
        description: 1,
    }
})

const Facture = mongoose.model('Facture', factureSchema);

module.exports = { Facture }