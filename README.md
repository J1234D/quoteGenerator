# Quote Generator

A simple React application that fetches and displays inspirational quotes using the API Ninjas Random Quotes API.

## Features

- Generate random quotes with a single click
- Automatically loads a quote when the page opens
- Responsive and clean user interface
- Glassmorphism-inspired quote card
- Environment variable support for API key security

## Built With

- React
- Vite
- JavaScript
- Tailwind CSS
- API Ninjas Quotes API

## Installation

Clone the repository:

```bash
git clone https://github.com/J1234D/quoteGenerator
cd quote-generator
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
VITE_API_KEY=your_api_key_here
```

Start the development server:

```bash
npm run dev
```

## API

This project uses the API Ninjas Random Quotes API:

https://api.api-ninjas.com/v2/randomquotes

API documentation:
https://api-ninjas.com/api/quotes

## Environment Variables

This project requires an API key from API Ninjas.

Create a `.env` file:

```env
VITE_API_KEY=your_api_key_here
```

## Deployment

This project can be deployed easily using Vercel.

Add the following environment variable in your Vercel project settings:

```env
VITE_API_KEY=your_api_key_here
```

## Author

Made with ❤️ by Jishnu Dutta
