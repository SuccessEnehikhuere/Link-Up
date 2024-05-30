import { getServerSession } from 'next-auth'
import { authOptions } from './[...nextauth]'
import { dbConnect, disconnect } from '@/lib/mongodb'
import Links from '@/models/Links'

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(401).json({ message: 'Only POST requests allowed' })
  }

  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).json({
      message: 'Unauthorized access',
    })
  }

  await dbConnect()
  try {
    const { links } = req.body
    const data = await Links.insertMany(links)
    res.status(200).json({ message: 'Links saved successfully', data })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
  await disconnect()
}

export default handler
