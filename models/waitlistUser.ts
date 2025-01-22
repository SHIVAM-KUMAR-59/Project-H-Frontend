import mongoose from 'mongoose'

const WaitlistUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // To Store the messages
    message: {
      type: mongoose.Schema.ObjectId,
      default: null,
    },
  },
  { timestamps: true },
)

export default mongoose.models.WaitlistUser ||
  mongoose.model('WaitlistUser', WaitlistUserSchema)
