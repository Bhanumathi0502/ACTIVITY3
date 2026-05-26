const express = require('express'); 
const app = express(); 
const PORT = 3000; 


app.get('/welcome', (req, res ) => { 
  res.send('<h1>\ Welcome once again from Server </h1>');
});


app.get('/api/data', (req, res) => { 
  res.json({ message: 'This is some data from the API.' }); 
});

app.listen(PORT, () => { 
  console.log(`Server is running on port ${3000}`);
});