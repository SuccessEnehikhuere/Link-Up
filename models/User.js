// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     firstName: { type: String, required: false },
//     lastName: { type: String, required: false },
//     email: { type: String, required: true, unique: true },
//     password: { type: String },
//     image: { type: String },
//   },

//   {
//     timestamps: true,
//   }
// )

// const User = mongoose.models.User || mongoose.model('User', userSchema)
// export default User

import mongoose from 'mongoose'
import bcryptjs from 'bcryptjs'

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    image: { type: String },
  },
  {
    timestamps: true,
  }
)

// Adding a method to compare hashed password with plain text password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcryptjs.compare(candidatePassword, this.password)
}

// Ensure to hash the password before saving the user
userSchema.pre('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    // Hash the password
    const salt = await bcryptjs.genSalt(10)
    this.password = await bcryptjs.hash(this.password, salt)
  }
  next()
})

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User
