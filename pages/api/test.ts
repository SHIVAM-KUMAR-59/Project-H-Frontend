import { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '@/lib/configDB'
import waitlistUser from '@/models/waitlistUser'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB()

  try {
    const users = await waitlistUser.find()
    console.log(users) // Log the users to the console
    return res.status(200).json(users)
  } catch (error) {
    console.error('Error fetching users:', error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

export default handler 