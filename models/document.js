const mongoose = require('mongoose')

const DocumentSchema = new mongoose.Schema({
  case: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Case',
    required: true, // mandatory link to a Case
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false, // optional, useful for knowing who uploaded it
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['image', 'pdf', 'doc', 'other'], // expand based on your needs
    required: true,
  },
  fileUrl: {
    type: String, // URL/path of the uploaded file
    required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.models.Document || mongoose.model('Document', DocumentSchema)
export default mongoose.models.Document || mongoose.model('Document', DocumentSchema)
