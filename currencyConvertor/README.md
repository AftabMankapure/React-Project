# Currency Converter

## Description:

Currency Converter is a web application that allows users to convert amounts between various currencies. It provides real-time exchange rates using a custom hook for fetching currency data.

## Features:

- Converts amounts between different currencies.
- Swap functionality to easily reverse the currency selection.
- Dynamic calculation of converted amounts based on real-time rates.
- Clean and responsive user interface.

## Tech Stack:

- React (Functional Components)
- TailwindCSS (for styling)
- Custom React Hook (`useCurrencyInfo`) for fetching live exchange rates from an API

## How It Works:

The app uses a custom hook `useCurrencyInfo` to fetch real-time currency data from an external API. Users can enter the amount, select the "from" and "to" currencies, and the app will calculate the converted amount.

### Key Components:

1. **App Component:**

   - Manages the state for amount, selected currencies (`from` and `to`), and the converted amount.
   - Includes a swap feature to reverse the currency selection.

2. **InputBox Component:**

   - Provides the input fields for the amount and the currency selection.
   - Renders currency options dynamically based on the fetched data.

3. **Custom Hook - `useCurrencyInfo`:**
   - Fetches exchange rates for a given currency from an external API.
   - Caches the rates locally in the component state and updates them when the selected currency changes.

## How to Run the Project:

1. Clone the repository:

   ```
   git clone https://github.com/AftabMankapure/React-Project.git
   ```

2. Navigate to the `currency-converter` directory:

   ```
   cd currency-converter
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm start
   ```

5. Open the app in your browser at:
   ```
   http://localhost:3000
   ```

## Screenshots:

![image](https://github.com/user-attachments/assets/846e368d-16cd-4368-abc0-8db5094796b9)

## Future Enhancements:

- Add support for historical exchange rates.
- Allow users to select multiple currencies and compare conversion rates.

