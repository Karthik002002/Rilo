const express = require('express');
const { Pool } = require('pg');

const app = express();

// PostgreSQL connection configuration
const pool = new Pool({
  user: 'rilo',
  host: 'localhost',
  database: 'postgres',
  password: 'Panda/1$',
  port: 5432, // Default PostgreSQL port
});

// Query example
app.get('/users', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM users');
      client.release();
      res.json(result.rows);
    } catch (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ message: 'Error fetching data' });
    }
  });
  

const PORT =3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
