import express from 'express';
import upload from '../filehandle/createEvent';
import createEventController from '../controllers/createEventController';

  const createEventRoute=express.Router()

createEventRoute.post('/event',upload.single("coverPhoto"),createEventController)

export {createEventRoute}