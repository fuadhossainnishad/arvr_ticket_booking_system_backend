import express from 'express';
import validateRequest from '../middlewares/validateRequest';
import { UserValiation } from '../validation/userValidation';
import { getAdminIdController, getAdminInfoController } from '../controllers/adminController';

const getAdminRoute=express.Router()

getAdminRoute.post('/signin/admin',validateRequest(UserValiation.userSignInValidationSchema),getAdminIdController)

getAdminRoute.get('/admin/:adminId',getAdminInfoController)

export default getAdminRoute;