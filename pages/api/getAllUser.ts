import { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '@/lib/configDB'
import waitlistUser from '@/models/waitlistUser'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  await connectDB()

  try {
<<<<<<< HEAD
    const users = await waitlistUser.find().sort({ _id: -1 })

    return res
      .status(200)
      .json({ message: 'Users fetched successfully', data: users })
  } catch (error: unknown) {
    console.error('Error fetching users:', error)
    return res.status(500).json({ 
      message: 'Internal Server Error', 
      error: error instanceof Error ? error.message : 'Unknown error'
    })
=======
    const users = await waitlistUser.find({}, '-email') // Fetch users without email
    return res
      .status(200)
      .json({ message: 'Users fetched successfully', data: users })
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Internal Server Error', error: error.message })
>>>>>>> fb972fb5a73b870511ca743142d121d493cdd3f2
  }
}

export default handler
