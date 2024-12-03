import {  RowDataPacket } from "mysql2";

export interface Admin extends RowDataPacket {
    id:string;
    email:string;
    hashPassword:string;
}