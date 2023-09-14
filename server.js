const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const mongoURI = 'mongodb+srv://ivanmizz:lameck46@cluster0.kpysjfp.mongodb.net/tasktwo?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });

app.use(bodyParser.json());

const Person = require('./models/person');

// Create a new person
app.post('/api', async (req, res) => {
  try {
    const person = new Person(req.body);
    const result = await person.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all people or filter by name
app.get('/api', async (req, res) => {
  try {
    const query = req.query.name ? { name: req.query.name } : {};
    const people = await Person.find(query);
    res.json(people);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// Update a person by ID
app.put('/api/user_id', async (req, res) => {
  try {
    const person = await Person.findByIdAndUpdate(req.params.user_id, req.body, { new: true });
    res.json(person);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// Patch (partially update) a person by ID
app.patch('/api/user_id', async (req, res) => {
    try {
      const person = await Person.findById(req.params.user_id);
  
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      // Update only the provided fields in the request body
      for (const key in req.body) {
        if (key !== '_user_id') {
          person[key] = req.body[key];
        }
      }
  
      const updatedPerson = await person.save();
      res.json(updatedPerson);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  

// Delete a person by ID
app.delete('/api/user_id', async (req, res) => {
  try {
    await Person.findByIdAndDelete(req.params.id);
    res.json({ message: 'Person deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
