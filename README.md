# TravelAdvisor React App

[![Netlify Status](https://api.netlify.com/api/v1/badges/00f28aaf-33d6-4f8b-a431-a8cd48544593/deploy-status?branch=main)](https://app.netlify.com/sites/travelg101/deploys)


[![TravelAdvisor](https://i.postimg.cc/jjfGdBDm/android-chrome-192x192.png)](https://postimg.cc/B8qhmYcB)

TravelAdvisor is a beautiful, modern, and minimalist React app designed to help you discover and plan your next travel adventure. It leverages the power of Rapid API Travel Advisor and Google Maps JavaScript API to provide you with valuable information about hotels, restaurants, and activities at your chosen destination. The app also includes a responsive Google Map to visualize your travel plans and explore various locations.

[Visit Here](https://travelg101.netlify.app/)

## Table of Contents

- [Features](#features)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Bugs](#bugs)
- [Contributing](#contributing)
- [License](#license)

## Features

- Search for hotels, restaurants, and activities at your desired destination.
- Utilize powerful filters to narrow down your search results.
- Responsive Google Map to visualize your travel itinerary.
- Modern and minimalist aesthetic design for an enhanced user experience.

## Dependencies

TravelAdvisor relies on the following dependencies:

- "@react-google-maps/api": "^2.19.0"
- "@reduxjs/toolkit": "^1.9.5"
- "@testing-library/jest-dom": "^5.17.0"
- "@testing-library/react": "^13.4.0"
- "@testing-library/user-event": "^13.5.0"
- "axios": "^1.4.0"
- "google-map-react": "^2.2.1"
- "lodash.debounce": "^4.0.8"
- "rc-slider": "^10.2.1"
- "react": "^18.2.0"
- "react-date-picker": "^10.3.0"
- "react-dom": "^18.2.0"
- "react-loading": "^2.0.3"
- "react-redux": "^8.1.1"
- "react-scripts": "5.0.1"
- "redux": "^4.2.1"
- "web-vitals": "^2.1.4"

## Installation

Before running the TravelAdvisor app, make sure you have Node.js installed on your machine.

1. Clone the repository:

```git clone https://github.com/your-username/traveladvisor.git```
```cd traveladvisor```

2. Install the required dependencies:

```npm install```


## Getting Started

1. Sign up for the Rapid API Travel Advisor service and obtain your API key.

2. Sign up for the Google Maps JavaScript API and get your API key.

3. Create a `.env` file in the root of your project and add your API keys:

```REACT_APP_T_API=YOUR_RAPID_API_KEY```
```REACT_APP_G_API=YOUR_GOOGLE_MAPS_API_KEY```

4. Start the development server:

```npm start```

The app will be accessible at `http://localhost:3000`.

## Usage

Upon opening TravelAdvisor in your web browser, you will be presented with an intuitive and user-friendly interface. Enter your desired destination in the search bar, and the app will fetch information about hotels, restaurants, and activities from Rapid API Travel Advisor. Use the provided filters to refine your search results based on your preferences.

The responsive Google Map will display the locations of the search results, allowing you to visualize your travel plans. Click on map markers or search results to view more details about each location.

Enjoy planning your dream vacation with TravelAdvisor!

## Bugs

Mainly there is one bug that I'm working on right now,

Sometimes when you load the app initially it gives out a runtime error, to fix the bug close the window and revisit the site.

## Contributing

Contributions to TravelAdvisor are welcome and encouraged! If you find any bugs, have feature requests, or want to make improvements, feel free to open issues and pull requests on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per the terms of the license.
