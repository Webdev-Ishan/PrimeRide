const http= require('http') // require http
const app = require('./app') // require express server app
const port= process.env.PORT || 3000
// we are using a certain port number which is hidden in my .env file 
// and if it does not connect then connect  to 3000

const server = http.createServer(app) 
// we did this because we want to take benifit from both express and http
// and this will assure fine control and less load along with efficeint networking to
// for the server


server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
// connecting and verifying