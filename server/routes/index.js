import express from 'express'
var router = express.Router()
import userRoutes from './userRoutes.js'

router.use('/users', userRoutes)

router.use((req, res) => res.send('Wrong route!'))

export default router
