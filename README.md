# Algolia Frontend

This project is a frontend application using React and Algolia for instant search. The application allows users to search for Pokémons.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (version 14 or higher)
- npm (version 6 or higher) or yarn (version 1 or higher)

## Algolia Configuration

To use Algolia in this project, you need to create an account on Algolia and obtain your application credentials.

1. **Create an Algolia Account:**
   - Go to [Algolia](https://www.algolia.com/) and create an account.

2. **Create an Algolia Application:**
   - After creating an account, create a new application in the Algolia dashboard.

3. **Obtain Algolia Credentials:**
   - In your Algolia application dashboard, go to the "API Keys" section and note your `Application ID` and `Search-Only API Key`.

## Project Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/MiltonEu/algolia-frontend.git
   cd algolia-frontend

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Configure environment variables:**
```sh 
REACT_APP_ALGOLIA_APP_ID=YourApplicationID
REACT_APP_ALGOLIA_API_KEY=YourSearchOnlyAPIKey

REACT_APP_BACKEND_URL=http://localhost:8080
```

## Running the application
```sh 
npm run start
```

