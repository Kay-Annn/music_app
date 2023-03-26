import express from 'express'
const router = express.Router()

import  {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/userControllers.js'

router.route('/').post(createUser).get(getAllUsers)
router.route('/singleUser').get(getUser).put(updateUser).delete(deleteUser)

export default router
