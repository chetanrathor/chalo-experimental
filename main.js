// main.js
const express = require('express');
const { join } = require('path');
const app = express();
const port = 3000;
const Razorpay = require('razorpay');
const instance = new Razorpay({
    key_id: 'rzp_test_sk5LT0DPwTdp0Q',
    key_secret: '1cAvSonoLSfq0Ldj4ceRvSQ8',
  });
// Middleware to parse JSON bodies
app.use(express.json());

// Route for the home page
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Route to handle a POST request
app.post('/data', async (req, res) => {
    const data = req.body;
    try {

        const response = await instance.orders.create({
            amount:100,
            currency:'INR',
            receipt:'TXN_01'
        })
        return res.json({response}) 
    }catch(error) {
        return res.json({error:JSON.stringify(error)});
    }
    
    return res.json({response});
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
