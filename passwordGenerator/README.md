# <p align="center">Password Generator</p>

## Description :-

**Password Generator** is a web application built with React that allows users to generate random, secure passwords based on customizable options. Users can select the length of the password and choose whether to include numbers and special characters.

- Generates random passwords based on user preferences.
- Allows users to copy the generated password to the clipboard.
- Adjustable password length, and options for including numbers and special characters.

## Tech Stacks :-

- React
- Tailwind CSS
- JavaScript

## Hooks Used :-

1. **useState**:  
   Used to manage various states in the application:

   - `length`: Holds the selected length of the password.
   - `numberAllowed`: Boolean to track if numbers should be included in the password.
   - `charAllowed`: Boolean to track if special characters should be included.
   - `Password`: Stores the generated password.

2. **useCallback**:  
   Used to optimize the password generation and clipboard copy functions:

   - `passwordGenerator`: Generates a random password when any of the dependencies (`length`, `numberAllowed`, or `charAllowed`) change.
   - `copyPasswordToClipboard`: Copies the generated password to the clipboard.

3. **useEffect**:  
   Automatically calls the `passwordGenerator` function when dependencies like `length`, `numberAllowed`, or `charAllowed` change.

4. **useRef**:  
   Used to refer to the password input field, enabling the functionality to automatically select and copy the password when the "COPY" button is clicked.

## Screenshots :-

![image](https://github.com/user-attachments/assets/92ee9d16-fcf7-43c1-9cd9-10669c40af8c)

## How to Use :-

1. Clone the repository:

```bash
git clone https://github.com/AftabMankapure/React-Project.git
```

2. Navigate to the `PasswordGenerator` directory:

```bash
cd React-Project/PasswordGenerator
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Features :-

- **Password Length Slider**: Adjust the password length between 6 and 100 characters.
- **Include Numbers**: Option to include numbers in the generated password.
- **Include Special Characters**: Option to include special characters in the generated password.
- **Copy to Clipboard**: Quickly copy the generated password to your clipboard by clicking the "COPY" button.
