import { getServerSession } from 'next-auth'
import { authOptions } from './[...nextauth]'
import { dbConnect, disconnect } from '@/lib/mongodb'
import Links from '@/models/Links'

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(401).json({ message: 'only   POST requests allowed' })
  }
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).json({
      message: 'unautorize access',
    })
  }

  await dbConnect()
  try {
    const data = await Links.find({ user: session.user.id })
    res.status(200).json({ message: 'Links fetched successfully', data })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
  await disconnect();
}

export default handler;
