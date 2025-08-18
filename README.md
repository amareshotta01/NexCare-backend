# NexCare Backend

This is the backend server for **NexCare**, a comprehensive doctor appointment booking application. It is built with Node.js and Express, providing a RESTful API for managing users, doctors, appointments, reviews, payments, and real-time chat functionality.

-   **Frontend Repository:** [amareshotta01/NexCare-frontend](https://github.com/amareshotta01/NexCare-frontend)
-   **Live Website:** [https://nex-care.vercel.app/](https://nex-care.vercel.app/)

## Features

-   **User & Doctor Authentication**: Secure registration and login for patients and doctors using JWT (JSON Web Tokens).
-   **Role-Based Access Control**: Differentiated permissions for patients, doctors, and admins.
-   **Profile Management**: Full CRUD (Create, Read, Update, Delete) operations for user and doctor profiles.
-   **Doctor Discovery**: Search and filter doctors by name or specialization.
-   **Appointment Booking**: System for patients to book appointments with doctors.
-   **Payment Integration**: Secure payment processing for bookings via Stripe Checkout.
-   **Real-time Chat**: Integrated chat functionality between users and doctors using GetStream.
-   **Reviews and Ratings**: Patients can leave reviews and ratings for doctors, with dynamic calculation of average ratings.

## Tech Stack

-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB with Mongoose ODM
-   **Authentication**: JWT (jsonwebtoken), bcryptjs for password hashing
-   **Payments**: Stripe
-   **Real-time Chat**: GetStream
-   **Middleware**: CORS, Cookie-Parser
-   **Deployment**: Vercel

## Project Setup and Installation

### Prerequisites

-   Node.js and npm
-   MongoDB instance (local or cloud-based like MongoDB Atlas)
-   Stripe Account
-   GetStream Account

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/amareshotta01/NexCare-backend.git
    cd nexcare-backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create a `.env` file** in the root directory and add the following environment variables:
    ```env
    PORT=5000
    MONGO_URI=<your_mongodb_connection_string>
    JWT_SECRET_KEY=<your_jwt_secret>

    # Stripe
    STRIPE_SECRET_KEY=<your_stripe_secret_key>
    CLIENT_SITE_URL=http://localhost:5173

    # GetStream
    STREAM_API_KEY=<your_stream_api_key>
    STREAM_API_SECRET=<your_stream_api_secret>
    STREAM_APP_ID=<your_stream_app_id>
    ```

4.  **Run the development server:**
    ```bash
    npm run start-dev
    ```
    The server will start on the port specified in your `.env` file (e.g., `http://localhost:5000`).

5.  **Run the production server:**
    ```bash
    npm start
    ```

## API Endpoints

The API is versioned under `/api/v1`.

### Authentication
-   `POST /auth/register`: Register a new user (patient or doctor).
-   `POST /auth/login`: Log in a user and receive a JWT.

### Users
-   `GET /users`: Get all users (admin only).
-   `GET /users/:id`: Get a single user's details (patient only).
-   `PUT /users/:id`: Update a user's details (patient only).
-   `DELETE /users/:id`: Delete a user (patient only).
-   `GET /users/profile/me`: Get the logged-in user's profile.
-   `GET /users/appointments/my-appointments`: Get all appointments for the logged-in user.

### Doctors
-   `GET /doctors`: Get all approved doctors. Can be filtered with a `query` parameter.
-   `GET /doctors/:id`: Get a single doctor's details.
-   `PUT /doctors/:id`: Update a doctor's profile (doctor only).
-   `DELETE /doctors/:id`: Delete a doctor's profile (doctor only).
-   `GET /doctors/profile/me`: Get the logged-in doctor's profile and their appointments.

### Reviews
-   `GET /doctors/:doctorId/reviews`: Get all reviews for a specific doctor.
-   `POST /doctors/:doctorId/reviews`: Create a new review for a doctor (patient only).

### Bookings & Payments
-   `POST /bookings/checkout-session/:doctorId`: Create a Stripe checkout session to book an appointment (patient only).
