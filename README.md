# Resort Booking Web App

A simple Express.js web application for a resort booking experience using Handlebars templates, MongoDB, user authentication, and booking confirmation.

## Project Overview

This project is a hotel/resort reservation site built with Node.js, Express, MongoDB, and Handlebars (`hbs`). Users can sign up, log in, browse pages such as rooms, dining, and gallery, and submit booking information to receive a confirmation.

## Key Features

- User registration and login
- Password hashing with `bcryptjs`
- JWT authentication with `jsonwebtoken`
- Cookie-based session handling
- MongoDB storage for users and booking records
- Dynamic views rendered with Handlebars
- Static assets served from `public/`

## Folder Structure

- `src/app.js` - Main Express app and route definitions
- `src/db/conn.js` - MongoDB connection setup
- `src/models/registers.js` - User schema and authentication helpers
- `src/models/booking.js` - Booking schema
- `src/middleware/auth.js` - Route guard for authenticated endpoints
- `template/views/` - Handlebars view templates
- `template/partials/` - Shared Handlebars partials
- `public/` - Static CSS, images, and client-side JS

## Routes

- `GET /home` - Home page
- `GET /room` - Room page
- `GET /roomview` - Room detail page
- `GET /dining` - Dining page
- `GET /gallery` - Gallery page
- `GET /login` - Login form
- `POST /login` - Authenticate user
- `GET /signin` - Registration form
- `POST /signin` - Create a new user
- `GET /logout` - Log out the current user
- `GET /book` - Booking form
- `POST /book` - Submit booking
- `GET /confirmation.hbs` - Booking confirmation view

## Requirements

- Node.js
- MongoDB running locally on `mongodb://localhost:27017`
- A `.env` file with at least:

```env
SECRET_KEY=your_secret_key_here
```

## Installation

1. Clone or copy the repository.
2. Open a terminal in the project folder.
3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the project root with your secret key.
5. Make sure MongoDB is running.

## Running the App

Start the server with Node:

```bash
node src/app.js
```

Or use nodemon if installed locally:

```bash
npx nodemon src/app.js
```

The app listens on port `3000` by default.

## Usage

1. Open your browser at `http://localhost:3000/home`.
2. Sign in or log in from the navigation.
3. Browse the resort pages and submit a booking.
4. After booking, the app shows a confirmation page.

## Notes

- The database connects to `mongodb://localhost:27017/Resort`.
- The app currently has no default `GET /` redirect, so open `/home` manually.
- Booking data is stored in the `Booking` collection.
- Passwords are hashed before saving to the user database.

## Future Improvements

- Add a proper home route redirect from `/`
- Add validation for booking form fields
- Add email confirmation or admin dashboard
- Add a `start` script in `package.json`
