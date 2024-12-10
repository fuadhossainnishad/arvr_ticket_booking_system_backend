import express from 'express'
import getEventController from '../controllers/getEventController'

const getEventRoute=express.Router()

getEventRoute.get('/:id',getEventController)

export default getEventRoute