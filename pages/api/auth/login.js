import User from "@/models/User";

const handler = async(req, res) =>{
  const {email, password} = req.body
  const user = await User.Find({
    email: email,
  });

  if(!user){
    return res.status(401).json({message : "Invalid details"})
  }

  const isMatch = await user?.comparePassword(password)
  res.status(200).json({ token })
}

export default handler