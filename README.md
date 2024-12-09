# User Registration Module

This project implements a **User Registration Module** using **Node.js**, **Express.js**, **Mongoose**, and **JSON Web Tokens (JWT)** for authentication and authorization. It includes hashing of passwords for secure storage, validation of user input, and efficient error handling.

---

## Features

1. **User Model**:
   - Stores user details: `fullname` (split into `firstname` and `lastname`), `email`, `password`, and `socketID`.
   - Passwords are securely hashed using `bcrypt`.
   - Provides methods for:
     - Generating authentication tokens (`generateAuthtoken`).
     - Comparing user-provided passwords (`comparepassword`).
     - Hashing passwords before storage (`hashpassword`).

2. **User Registration**:
   - Handles user registration with validation for required fields (`firstname`, `email`, `password`).
   - Automatically hashes passwords before saving.
   - Generates an authentication token upon successful registration.

3. **Routes**:
   - `/register`: Registers a new user with proper validation and returns an authentication token.

4. **Validation**:
   - Ensures the validity of:
     - Email format.
     - Minimum length for `firstname`, `lastname`, and `password`.

---

## Folder Structure

```plaintext
.
├── Models
│   └── usermodel.js      # Defines the user schema and associated methods
├── Services
│   └── userService.js    # Provides user creation logic
├── Controllers
│   └── usercontroller.js # Handles user registration logic
├── Routes
│   └── userroute.js      # Defines user-related routes
└── app.js                # Main application entry point
```

---

## API Documentation

### Endpoint: `POST /register`

#### Description
Registers a new user by validating the provided data, hashing the password, and generating an authentication token.

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
- `email` must be in valid email format.
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
  - Validation errors return a `400` status with detailed error messages.
  - Server errors return a `500` status with an appropriate error message.

---

## Usage

### Prerequisites
- **Node.js** installed.
- MongoDB instance running locally or remotely.
- `.env` file with the following variables:
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
3. Run the application:
   ```bash
   npm start
   ```

### Testing the API
Use tools like **Postman** or **cURL** to test the `/register` endpoint:
```bash
curl -X POST http://localhost:3000/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}'
```

---

## Technologies Used

- **Node.js**: JavaScript runtime for building the server-side application.
- **Express.js**: Web framework for routing and middleware management.
- **Mongoose**: MongoDB object modeling tool for schema and data management.
- **bcrypt**: Password hashing library.
- **jsonwebtoken (JWT)**: For secure token-based authentication.
- **express-validator**: Middleware for input validation and sanitization.

---

## Notes

1. Ensure a secure and unique `JWT_KEY` is used in production.
2. Passwords are stored as hashes for security. Never store raw passwords.
3. Modify the `MONGO_URI` in the `.env` file to point to your MongoDB database.

---

## Future Enhancements

- Add login functionality.
- Implement user roles (e.g., admin, user).
- Add email verification on registration.
- Rate limiting to prevent abuse of the `/register` endpoint.

---

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to contribute or report issues to improve this project! 😊
