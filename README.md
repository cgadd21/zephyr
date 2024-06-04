# Zephyr

Zephyr is a sleek and modern weather application that consumes data from a weather station API and presents it in a visually appealing way. Built with the latest web technologies, Zephyr aims to provide an intuitive and engaging user experience.

## Features

- **Real-time Weather Data**: Fetches and displays real-time weather information from a reliable weather station API.
- **Modern UI**: Uses Tailwind CSS and DaisyUI for a clean and responsive design.
- **Fast and Efficient**: Powered by Vite for rapid development and SWR for data fetching.
- **Type-safe**: Written in TypeScript for better maintainability and fewer bugs.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Vite**: A build tool that provides a faster and leaner development experience.
- **SWR**: A React Hooks library for remote data fetching.
- **Tailwind CSS**: A utility-first CSS framework.
- **DaisyUI**: A plugin for Tailwind CSS that provides pre-designed components.

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/cgadd21/zephyr.git
   cd zephyr
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   ```

   The app will be available at `http://localhost:5173/zephyr/`.

## Usage

1. **API Configuration:**

   Create a file named `.env.local` and add an API endpoint in this file with your weather station API details:

   ```plaintext
   WeatherStationAPI = "https://api.weatherstation.com/data";
   ```

2. **Run the application:**

   ```sh
   npm run dev
   ```

3. **Build for production:**

   ```sh
   npm run build
   ```

4. **Preview the production build:**

   ```sh
   npm run preview
   ```

## Project Structure

```plaintext
├── src
│   ├── components
│   ├── hooks
│   ├── app.tsx
│   ├── index.css
│   ├── main.tsx
│   └── ...
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── ...
```
