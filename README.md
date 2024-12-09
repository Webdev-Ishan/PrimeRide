# PrimeRide
This is a Taxi/Cab app using the MERN stack (Mongodb, Reactjs, ExpressJS, Nodejs) and with modern and sleek UI along with the flawless Backend and  Interactive frontend collaboration



# PrimeRide

PrimeRide is a modern Taxi/Cab application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It features a sleek user interface and a robust backend, ensuring seamless interaction between the frontend and backend.

## User Management API Documentation

### Overview

This API is designed for managing user registration, validation, password security through hashing, and token-based authentication. It is built using Node.js, Express.js, and MongoDB with Mongoose as the ORM.

### Base URL
<your_base_url>/api/v1

Insert Code
Copy code

### Endpoints

#### 1. Register a User

- **Method:** `POST`
- **Endpoint:** `/register`

This endpoint allows a new user to register by providing their first name, email, and password. Upon successful registration, the API returns a JSON Web Token (JWT) for authentication purposes.

##### Request Parameters

**Headers:**
- `Content-Type: application/json` (Required to send data in JSON format)

**Body (JSON):**
```json
{
    "fullname": {
        "firstname": "String (required, min. 3 characters)",
        "lastname": "String (optional, min. 3 characters)"
    },
    "email": "String (required, valid email format, min. 5 characters)",
    "password": "String (required, secure password, min. 6 characters)"
}
Validation Rules
| Field | Validation | Error Message | |------------------------|----------------------------------------------|---------------------------------------------| | fullname.firstname | Must be at least 3 characters long. | "Firstname should be at least 3 characters long." | | email | Must be a valid email format. | "Invalid Email." | | password | Must be at least 6 characters long. | "Password must be at least 6 characters long." |

Response
Success (201 Created):

json
Insert Code
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
Error Responses:

Validation Error (400 Bad Request):
json
Insert Code
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
Server Error (500 Internal Server Error):
json
Insert Code
Copy code
{
    "error": "Internal Server Error"
}
Schema Definitions
User Schema
| Field | Type | Required | Description | |------------------------|---------|----------|-----------------------------------------------| | fullname.firstname | String | Yes | First name of the user (min. 3 characters). | | fullname.lastname | String | No | Last name of the user (min. 3 characters). | | email | String | Yes | Unique email address of the user. | | password | String | Yes | Secure password (stored as a hashed value). | | socketID | String | No | Used for real-time communication (Socket.IO).|

Business Logic
Password Hashing: Passwords are hashed before being stored in the database using the bcrypt library to ensure security.

javascript
Insert Code
Copy code
userSchema.statics.hashpassword = async function(password) {
    return await bcrypt.hash(password, 10);
}
Token Generation: Upon successful registration, a JWT token is generated for authentication.

javascript
Insert Code
Copy code
userSchema.methods.generateAuthtoken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_KEY);
}
Error Handling
Validation Errors: Uses express-validator to validate request parameters and return structured error messages.
Server Errors: Any unexpected errors are logged, and a generic 500 Internal Server Error response is returned.
Usage Example
Request:

http
Insert Code
Copy code
POST /register
Content-Type: application/json

{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "password": "securepassword123"
}
Response:

Success (201 Created):
json
Insert Code
Copy code
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
