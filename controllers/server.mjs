import express from 'express'
import {join} from 'path'
import bodyParser from 'body-parser'
import connection from '../model/db.js'

const app = express()
const port = 8080
const root = "/home/anacletto/People_crud"

app.get("/",(req,res)=>{
    res.sendFile(join(root,"views/home/index.html"))
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(root))
app.use(express.static(join(root,"views")))

// Route to insert user data
app.post('/users', (req, res) => {
  const { first_name, last_name, email, job_title } = req.body;

  connection.query(
    'CALL insert_user_data(?, ?, ?, ?)',
    [first_name, last_name, email, job_title],
    (error, results, fields) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error inserting user data' });
      }
      res.status(200).json({ message: 'User data inserted successfully' });
    }
  );
});

// Route to fetch user data by ID
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;

  connection.query(
    'CALL get_user_by_id(?)',
    [userId],
    (error, results, fields) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching user data' });
      }
      res.status(200).json(results[0]); // Assuming the first result set contains the user data
    }
  );
});

// Route to update user data by ID
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const { first_name, last_name, email, job_title } = req.body;

  connection.query(
    'CALL update_user_data(?, ?, ?, ?, ?)',
    [userId, first_name, last_name, email, job_title],
    (error, results, fields) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error updating user data' });
      }
      res.status(200).json({ message: 'User data updated successfully' });
    }
  );
});

// Route to delete user data by ID
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;

  connection.query(
    'CALL delete_user_data(?)',
    [userId],
    (error, results, fields) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error deleting user data' });
      }
      res.status(200).json({ message: 'User data deleted successfully' });
    }
  );
});

// Route to insert user data
app.post('/users', (req, res) => {
  const { first_name, last_name, email, job_title } = req.body;

  connection.query(
    'CALL insert_user_data(?, ?, ?, ?)',
    [first_name, last_name, email, job_title],
    (error, results, fields) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error inserting user data' });
      }
      res.status(200).json({ message: 'User data inserted successfully' });
    }
  );
});

// Route to fetch user data by ID
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;

  connection.query(
    'CALL get_user_by_id(?)',
    [userId],
    (error, results, fields) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching user data' });
      }
      res.status(200).json(results[0]); // Assuming the first result set contains the user data
    }
  );
});

// Route to update user data by ID
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const { first_name, last_name, email, job_title } = req.body;

  connection.query(
    'CALL update_user_data(?, ?, ?, ?, ?)',
    [userId, first_name, last_name, email, job_title],
    (error, results, fields) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error updating user data' });
      }
      res.status(200).json({ message: 'User data updated successfully' });
    }
  );
});

// Route to delete user data by ID
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;

  connection.query(
    'CALL delete_user_data(?)',
    [userId],
    (error, results, fields) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error deleting user data' });
      }
      res.status(200).json({ message: 'User data deleted successfully' });
    }
  );
});


app.listen(port,()=>{
    console.log(`Server running on localhost:${port}`)
})


