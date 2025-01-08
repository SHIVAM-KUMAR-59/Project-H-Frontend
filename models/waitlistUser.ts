import mongoose from 'mongoose'

const WaitlistUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
}, { timestamps: true })

export default mongoose.models.WaitlistUser ||
  mongoose.model('WaitlistUser', WaitlistUserSchema)
