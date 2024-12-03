import { RowDataPacket } from "mysql2"

export interface User extends RowDataPacket{
id: string
fullName: string
email: string
mobileNumber: string
hashPassword: string
}
