const express = require('express');
const cors = require('cors');

const path = require('path');


const corsOptions = {
    origin: ['http://localhost:5173'],
};
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.use(cors(corsOptions));

app.get('/api', (req, res) => {
    console.log('GET request received');
    console.log('req headers>>>>', req.headers);
    console.log('req cookies>>>>', req.cookies);

    res.send([1,2,3]);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

  
app.listen(PORT, () => {    
    console.log('Server is running on port 3000');
}   
);
