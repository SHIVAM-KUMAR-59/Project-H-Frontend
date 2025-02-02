import { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '@/lib/configDB'
import waitlistUser from '@/models/waitlistUser'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  await connectDB()

  const { name, email, message } = req.body

  if (
    !name ||
    !email ||
    typeof message !== 'string' ||
    message.trim().length === 0
  ) {
    return res
      .status(400)
      .json({ message: 'Please fill in all fields correctly' })
  }

  try {
    // Check if the user exists
    let user = await waitlistUser.findOne({ email })

    // If user doesn't exist, create a new one
    if (!user) {
      user = new waitlistUser({ name, email, message: null })
    }

    // Check if the user has already sent a message
    if (user.message !== null) {
      return res
        .status(400)
        .json({ message: 'Sorry, you have already sent a message' })
    }

    // Save the new message
    user.message = message

    await user.save()

    return res.status(201).json({ message: 'Message sent successfully' })
  } catch (error: unknown) {
    console.error('Error:', error)
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}

export default handler
