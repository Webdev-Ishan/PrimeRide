# PrimeRide
This is a Taxi/Cab app using the MERN stack (Mongodb, Reactjs, ExpressJS, Nodejs) and with modern and sleek UI along with the flawless Backend and  Interactive frontend collaboration



User Management API Documentation
Overview
This API is designed for managing user registration, validation, password security through hashing, and token-based authentication. It is built using Node.js, Express.js, and MongoDB with Mongoose as the ORM.

Base URL
<your_base_url>/api/v1

Endpoints
1. Register a User
POST /register
This endpoint allows a new user to register by providing their first name, email, and password. Upon successful registration, the API returns a JSON Web Token (JWT) for authentication purposes.

Request Parameters
Headers
Key	Value	Description
Content-Type	application/json	Required to send data in JSON format.
Body (JSON)
Field	Type	Required	Description
fullname.firstname	String	Yes	The first name of the user (minimum 3 characters).
fullname.lastname	String	No	The last name of the user (minimum 3 characters).
email	String	Yes	A unique and valid email address (minimum 5 characters).
password	String	Yes	A secure password (minimum 6 characters).
Validation Rules
Field	Validation	Error Message
fullname.firstname	Must be at least 3 characters long.	"Firstname should be at least 3 characters long."
email	Must be a valid email format.	"Invalid Email."
password	Must be at least 6 characters long.	"Password must be at least 6 characters long."
Response
Success (201 Created)
json
Copy code
{
    "token": "<JWT_TOKEN>",
    "user": {
        "_id": "<USER_ID>",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "johndoe@example.com"
    }
}
Error Responses
Status Code	Message	Description
400	{"errors": [<validation errors>]}	Returned if validation fails.
500	{"error": "Internal Server Error"}	Returned for unexpected server errors.
Schema Definitions
User Schema
Field	Type	Required	Description
fullname.firstname	String	Yes	First name of the user (min. 3 characters).
fullname.lastname	String	No	Last name of the user (min. 3 characters).
email	String	Yes	Unique email address of the user.
password	String	Yes	Secure password (stored as a hashed value).
socketID	String	No	Used for real-time communication (Socket.IO).
Business Logic
Password Hashing
Passwords are hashed before being stored in the database using the bcrypt library. This ensures security by preventing plain-text password storage.

Hashing Function:
userSchema.statics.hashpassword = async function(password) { return await bcrypt.hash(password, 10); }
Token Generation
Upon successful registration, a JWT token is generated for authentication using jsonwebtoken.

Token Function:
userSchema.methods.generateAuthtoken = function() { return jwt.sign({ id: this._id }, process.env.JWT_KEY); }
Error Handling
Validation Errors:
Uses express-validator to validate request parameters and return structured error messages.

Server Errors:
Any unexpected errors are logged, and a generic 500 Internal Server Error response is returned.

Usage Example
Request
POST /register
json
Copy code
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "password": "securepassword123"
}
Response
Success (201 Created)
json
Copy code
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "_id": "64b6f2e89f5e354b3c8a3f29",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "johndoe@example.com"
    }
}
Validation Error (400 Bad Request)
json
Copy code
{
    "errors": [
        {
            "msg": "Firstname should be at least 3 characters long",
            "param": "fullname.firstname",
            "location": "body"
        },
        {
            "msg": "Invalid Email",
            "param": "email",
            "location": "body"
        }
    ]
}
Server Error (500 Internal Server Error)
json
Copy code
{
    "error": "Internal Server Error"
}
