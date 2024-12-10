import { Request, Response } from 'express';
import {db} from './config/dbconfig';
import app from './app';


const port=process.env.PORT

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
app.listen(port,async () => {
  console.log(`Server is listening on http://localhost:${port}`);
  // await testDatabaseConnection(); 
});
