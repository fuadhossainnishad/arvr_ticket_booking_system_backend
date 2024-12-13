import { db } from "../config/dbconfig";
import { bookingInfoQuery, bookingQuery } from "../database/postgresql/queries/bookingQueries";
import { userQuery } from '../database/postgresql/queries/userQueries';

export const postBookingService= async (userId:number,eventId:number,seats:number)=>{
    const dbresponse=await db(bookingQuery,[userId,eventId,seats])
    const bookingId=dbresponse.rows
    if(!bookingId){
        return null
    }
    return bookingId
    console.log("bookingId",bookingId);
    
}

export const getBookingInfoService= async (userId:number)=>{
    const dbresponse=await db(userQuery.userBookingsQuery,[userId])
    const bookingInfo=dbresponse.rows
    if(!bookingInfo){
        return null
    }
    return bookingInfo
    console.log("bookingInfo:",bookingInfo)
}