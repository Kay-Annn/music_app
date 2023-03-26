import User from '../models/user.js'

export const getAllUsers = async (req, res) => {
  try {
    const usersData = await User.find({})
    res.status(200).json({ data: usersData })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export const getUser = async (req, res) => {
  try {
    
    const userData = await User.findById({ _id: req.userId })

    if (!userData) {
      console.log("user")
      return res.status(404).json({ msg: `No user with id : ${req.userId}` })
    }

    res.status(200).json({ data: userData, status:200})
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: error })
  }
}

export const createUser = async (req, res) => {
  try {
    const newUser = await User.create({
      _id:req.body._id,
      username: req.body.username,
      email: req.body.email,
    })

    res.status(200).json({ msg: 'user created', newUser })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: error })
  }
}

export const updateUser = async (req, res) => {
  try {
    const id = req.params
    const updatedUser = await User.findOneAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    })

    res.status(200).json({ id: id, data: updatedUser })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const deletedUser = await User.findOneAndDelete({ _id: id })

    if (!deletedUser) {
      return res.status(404).json({ msg: `No user with id: ${id}` })
    }

    res.status(200).json({ deletedUser })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}



