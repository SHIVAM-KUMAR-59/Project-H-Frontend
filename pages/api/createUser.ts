import { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '@/lib/configDB'
import waitlistUser from '@/models/waitlistUser'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  await connectDB()

  const { name, email } = req.body

  if (!name || !email) {
    return res.status(400).json({ message: 'Required fields missing' })
  }

  try {
    const user = await waitlistUser.findOne({ email })

    if (user) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const newUser = new waitlistUser({ name, email })
    await newUser.save()

    return res
      .status(200)
      .json({ message: 'User created successfully', data: newUser })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

export default handler
