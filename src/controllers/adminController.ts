import { getAdminId, getAdminInfo } from "../services/adminService";
import catchAsync from "../utils/catchAsync";
import { Request, Response } from 'express';

export const getAdminIdController= catchAsync(async (req:Request,res:Response)=>{
    const {email,password} = req.body
    const adminId=getAdminId(email, password)
    if(!adminId){
        return res.status(404).json({message:"Admin not found"})
    }
    return res.status(200).json({message:"Admin SignIn Successfully",adminId})
})

export const getAdminInfoController= catchAsync(async(req:Request,res:Response)=>{
    const {adminId}=req.params
    const adminInfo=getAdminInfo(adminId)
    if(!adminInfo){
        res.status(404).json({message:"Admin not found"})
    }
    return res.status(200).json({message:"Admin found successfully",adminInfo})
})