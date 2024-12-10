import express from 'express';
import validateRequest from '../middlewares/validateRequest';
import { postBookingValidation } from '../validation/bookingsValidation';
import { getBookingInfoController, postBookingController } from '../controllers/bookingController';

const bookingRoute=express.Router()

bookingRoute.post('/',validateRequest(postBookingValidation),postBookingController)

bookingRoute.get('/:bookingId',getBookingInfoController)

export default bookingRoute