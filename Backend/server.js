const http = require('http'); // require http
const app = require('./app'); // require express server app
const cors = require('cors'); // require cors
const port = process.env.PORT || 3000; // we are using a certain port number which is hidden in my .env file and if it does not connect then connect to 3000

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

// Apply CORS middleware to the app
app.use(cors(corsOptions));

const server = http.createServer(app); 
// we did this because we want to take benefit from both express and http
// and this will assure fine control and less load along with efficient networking for the server

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// connecting and verifying