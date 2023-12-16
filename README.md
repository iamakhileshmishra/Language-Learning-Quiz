# Language Learning Game

## Overview

Welcome to the Language Learning Game! This project is designed to provide an interactive quiz for language learning, allowing users to test their language skills and track their progress.

## Features

### 1. Home Page
- Users can enter their name and choose their preferred language before starting the quiz.
- Background image adds a visually appealing touch to the home page.

### 2. Quiz Page
- Users can take a language quiz with questions in English and Hindi.
- The quiz dynamically changes based on the selected language.
- Each question has multiple options, and users receive instant feedback on their choices.
- At the end of the quiz, users see their total score, the number of correct answers, and a personalized message based on their performance.

### 3. Score Calculation
- Scores are calculated based on correct and incorrect answers.
- Each correct answer adds 1 point, and each incorrect answer deducts 0.5 points.

### 4. Leaderboard
- A leaderboard page displays user scores in descending order.
- Users can see their rank, name, language, and total score.
- The top three scorers are highlighted with 1st, 2nd, and 3rd place badges.

### 5. User Authentication
- Users can register and log in to the system using a secure authentication mechanism.
- Protected routes ensure that only authenticated users can access certain pages.

### 6. User Profiles
- Authenticated users have access to a profile dashboard displaying their username.

### 7. Backend Integration
- User quiz results are stored in MongoDB using the `/api/saveQuizResult` endpoint.
- User authentication is implemented using JWT tokens.

### 8. Tech Stack

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- State Management: React Context API
- Routing: React Router
- Authentication: JWT (JSON Web Tokens)

## Getting Started

1. Clone the repository.
2. Navigate to the `frontend` directory and run `npm install` to install frontend dependencies.
3. Start the frontend with `npm start`.
4. Navigate to the `backend` directory and run `npm install` to install backend dependencies.
5. Start the backend with `npm start`.

## Authors

- [Akhilesh Kumar Mishra]

Feel free to contribute or report issues!

