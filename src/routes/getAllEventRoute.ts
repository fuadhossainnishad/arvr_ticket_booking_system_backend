import express from 'express';
import { getAllEventsController } from '../controllers/getAllEventsController';

const getAllEventRoute = express.Router()

getAllEventRoute.get('/',getAllEventsController)

export default getAllEventRoute