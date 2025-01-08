import { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '@/lib/configDB'
import waitlistUser from '@/models/waitlistUser'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  await connectDB()

  try {
    // Get all users sorted by newest first, excluding email field
    const users = await waitlistUser.find({}, '-email').sort({ _id: -1 })

    return res
      .status(200)
      .json({ message: 'Users fetched successfully', data: users })
  } catch (error: unknown) {
    console.error('Error fetching users:', error)
    return res.status(500).json({ 
      message: 'Internal Server Error', 
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}

export default handler
