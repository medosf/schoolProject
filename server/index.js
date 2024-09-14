const express = require('express');
const cors = require('cors');
const path = require('path');
const { readAllItems } = require('./db/cosmos');

const corsOptions = {
    origin: ['http://localhost:5173'],
};
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.use(cors(corsOptions));

app.get('/api', async(req, res) => {
   const response = await readAllItems();
   console.log("res >>>>>", response);
   res.json(response);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

  
app.listen(PORT, () => {    
    console.log('Server is running on port 3000');
}   
);
