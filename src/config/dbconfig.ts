import mysql from 'mysql2/promise'
import { dbconnfig } from './dotenv.config'

const db=mysql.createPool(dbconnfig)

export default db