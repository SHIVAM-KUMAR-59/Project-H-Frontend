import { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '@/lib/configDB'
import waitlistUser from '@/models/waitlistUser'
import message from '@/models/message'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  await connectDB()

  const { name, email, text } = req.body

  if (!name || !email || !text) {
    return res.status(400).json({ message: 'Please fill in all fields' })
  }

  try {
    // If we are allowing only registered users to send message
    //   const user = await waitlistUser.findOne({ email })
    // if (!user) {
    //   return res
    //     .status(400)
    //     .json({ message: 'You need to register before sending a message' })
    // }

    const newMessage = new message({ text })

    await newMessage.save()

    // If we are allowing only registered users to send message
    // user.message.push(newMessage)
    // await user.save()
    return res.status(201).json({ message: 'Message sent successfully' })
  } catch (error: unknown) {
    console.error('Error fetching users:', error)
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}

export default handler
