const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

// app.get('/api/message', (req, res) => { //req => request / res => response
//   res.json({ message: "Hello from the backend!" });

//     // req.body        // Data sent in a POST body (e.g., JSON)
//     // req.query       // URL query params (?name=Colton)
//     // req.params      // URL parameters (/user/:id)
//     // req.headers     // Request headers
//     // req.method      // HTTP method (GET, POST, etc.)

//     // res.send("Hello")
//     // res.json({ msg: "Success" })  // Send JSON
//     // res.status(404).send("Not found")
//     // res.set('Content-Type', 'text/html')


// });

// app.post('/api/echo', (req, res) => {
//   const { text } = req.body;
//   res.json({ echoed: `You said: ${text}` });
// });

app.listen(5000, () => console.log('Server running on http://localhost:5000'));