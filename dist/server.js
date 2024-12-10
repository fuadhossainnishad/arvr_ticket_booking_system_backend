"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const port = process.env.PORT;
// Create a MySQL connection pool
// const pool = mysql.createPool(dbconnfig);
// Test MySQL connection
// const testDatabaseConnection = async () => {
//   try {
//     const result = (await db('SELECT * FROM events'))!;
//     console.log('Data from database:', result.rows);
//   } catch (err) {
//     console.error('Database connection failed:', err);
//   }
// }; 
// Route to get data from database
// app.get('/students', async (req:Request, res:Response) => {
//   try {
//     // Query the database
//     const results = (await db('SELECT * FROM student'))!;
//     res.json(results.rows); // Send the data as a JSON response
//   } catch (err) {
//     console.log(err);
//     res.status(500).send('Error fetching data from database');
//   }
// });
// Start server and test database connection
app_1.default.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server is listening on http://localhost:${port}`);
    // await testDatabaseConnection(); 
}));
