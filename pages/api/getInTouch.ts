import { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '@/lib/configDB'
import waitlistUser from '@/models/waitlistUser'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  await connectDB()
  const { name, email, text } = req.body

  if (!name || !email || !text)
    return res.status(400).json({ message: 'Please fill in all fields' })

  try {
    const user =
      (await waitlistUser.findOne({ email })) ||
      new waitlistUser({ name, email })
    if (user.message?.length > 0)
      return res
        .status(400)
        .json({ message: 'You have already sent a message' })

    user.message = text
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
