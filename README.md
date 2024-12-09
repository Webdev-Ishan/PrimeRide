# User Authentication Module

This project is an implementation of a **User Authentication Module** using **Node.js**, **Express.js**, **Mongoose**, and **JSON Web Tokens (JWT)**. It includes features for user registration, secure password storage, and login functionality with token-based authentication.

---

## Features

1. **User Registration**:
   - Validates user input for required fields.
   - Hashes passwords before saving to the database for security.
   - Generates an authentication token upon successful registration.

2. **User Login**:
   - Validates login credentials.
   - Compares the hashed password with the user-provided password.
   - Generates an authentication token upon successful login.

3. **Input Validation**:
   - Ensures valid email format.
   - Validates minimum length requirements for `firstname` and `password`.

4. **Error Handling**:
   - Returns detailed error messages for invalid input or failed authentication.

---

## Folder Structure

```plaintext
.
├── Models
│   └── usermodel.js      # User schema and methods
├── Services
│   └── userService.js    # Handles user creation logic
├── Controllers
│   └── usercontroller.js # Manages user registration and login functionality
├── Routes
│   └── userroute.js      # Defines routes for user-related operations
└── app.js                # Main application entry point
```

---

## API Documentation

### 1. Endpoint: `POST /register`

#### Description
Registers a new user with the provided details and returns an authentication token upon success.

#### Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

#### Validations
- `email` must be a valid email address.
- `fullname.firstname` must be at least 3 characters long.
- `password` must be at least 6 characters long.

#### Response
- **Success**: Returns a JSON object with the authentication token and user details (excluding the password).
  ```json
  {
    "token": "jwt-token",
    "user": {
      "_id": "64d76a13b2e4123abcde5678",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```
- **Error**:
  - Validation errors return a `400` status with details.
  - Server errors return a `500` status.

---

### 2. Endpoint: `POST /login`

#### Description
Authenticates a user by verifying their email and password, then returns an authentication token.

#### Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

#### Validations
- `email` must be a valid email address.
- `password` must be at least 6 characters long.

#### Response
- **Success**: Returns a JSON object with the authentication token and user details.
  ```json
  {
    "token": "jwt-token",
    "user": {
      "_id": "64d76a13b2e4123abcde5678",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```
- **Error**:
  - Invalid credentials return a `401` status.
  - Server errors return a `500` status.

---

## Implementation Details

### User Model (`usermodel.js`)
- Defines the schema for user data, including:
  - `fullname`: Object with `firstname` and `lastname`.
  - `email`: Unique and required.
  - `password`: Stored as a hashed string for security.
- Provides methods for:
  - **Password hashing** (`hashpassword`).
  - **Password comparison** (`comparepassword`).
  - **Token generation** (`generateAuthtoken`).

---

### Controller (`usercontroller.js`)

#### Register User
- Validates input data using `express-validator`.
- Hashes the password using `bcrypt`.
- Creates the user and generates a JWT token.
- Returns the token and user details in the response.

#### Login User
- Validates input data.
- Verifies the email and password.
- Generates a JWT token if credentials are valid.
- Returns the token and user details.

---

### Routes (`userroute.js`)

#### `/register`
- **Method**: `POST`
- **Validation Middleware**:
  - `email`: Must be valid.
  - `fullname.firstname`: Must be at least 3 characters long.
  - `password`: Must be at least 6 characters long.
- **Handler**: `registerUser`

#### `/login`
- **Method**: `POST`
- **Validation Middleware**:
  - `email`: Must be valid.
  - `password`: Must be at least 6 characters long.
- **Handler**: `loginUser`

---

## Usage

### Prerequisites
- **Node.js** installed.
- MongoDB instance running locally or remotely.
- `.env` file with:
  ```env
  JWT_KEY=your-secret-key
  MONGO_URI=your-mongodb-uri
  ```

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```

### Testing the API
Use **Postman** or **cURL** for testing the endpoints.

---

## Technologies Used

- **Node.js**: Server-side runtime.
- **Express.js**: Web framework for routing and middleware.
- **Mongoose**: MongoDB object modeling.
- **bcrypt**: Secure password hashing.
- **jsonwebtoken (JWT)**: Token-based authentication.
- **express-validator**: Input validation middleware.

---

## Notes

1. Use a strong and unique `JWT_KEY` in production.
2. Always use HTTPS for secure communication.
3. Extend the functionality with user roles and email verification.

---

## Future Enhancements

- Add user profile management.
- Implement logout with token invalidation.
- Integrate email verification on registration.
- Rate limit requests for login and register endpoints.

---

## License

This project is licensed under the [MIT License](LICENSE). 

Feel free to contribute or report issues! 😊
