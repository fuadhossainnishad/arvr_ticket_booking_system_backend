import { db } from "../config/dbconfig";
import { bookingInfoQuery, bookingQuery } from "../database/postgresql/queries/bookingQueries";

export const postBookingService= async (userId:number,eventId:number,seats:number)=>{
    const dbresponse=await db(bookingQuery,[userId,eventId,seats])
    const bookingId=dbresponse.rows
    if(!bookingId){
        return null
    }
    return bookingId
    console.log("bookingId",bookingId);
    
}

export const getBookingInfoService= async (bookingId:number)=>{
    const dbresponse=await db(bookingInfoQuery,[bookingId])
    const bookingInfo=dbresponse.rows
    if(!bookingInfo){
        return null
    }
    return bookingInfo
    console.log("bookingInfo:",bookingInfo)
}