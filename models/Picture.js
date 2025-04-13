const mongoose = require('mongoose')

const PictureSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true, // Every picture must be linked to a user
  },
  
  fileUrl: {
    type: String, // Cloud URL or local path
    required: true,
  },
  type: {
    type: String,
    enum: ['profile', 'document', 'other'], // You can customize this as needed
    default: 'other',
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  }
})

module.exports = mongoose.models.Picture || mongoose.model('Picture', PictureSchema)
export default mongoose.models.Picture || mongoose.model('Picture', PictureSchema)
