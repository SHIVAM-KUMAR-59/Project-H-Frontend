import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  // In case We want to implement that only registered user can send the message
  //   sender: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'User',
  //   },

  // In case We are allowing everybody to send the message
  //   sender: {
  //     name: {
  //       type: String,
  //       required: true,
  //     },
  //     email: {
  //       type: String,
  //       required: true,
  //     },
  //   },
})

export default mongoose.models.Message ||
  mongoose.model('Message', MessageSchema)
