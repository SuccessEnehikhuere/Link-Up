const { getServerSession } = require('next-auth')
const { authOptions } = require('./[...nextauth]')
const { dbConnect, disconnect } = require('@/lib/mongodb')
const { default: Links } = require('@/models/Links')

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { id } = req.body
    const session = await getServerSession(req, res, authOptions)
    if (!session) {
      res.status(401).json({ message: 'Unauthorized access' })
      return
    }

    await dbConnect()
    try {
      await Links.deleteOne({ _id: id })

      res.status(200).json({ message: 'Link deleted successfully', data: id })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
  await disconnect()
}
export default handler
