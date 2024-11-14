# <p align="center">reactRouter</p>

## Description :-

**reactRouter** is a React application that demonstrates the use of `react-router-dom` for dynamic routing and data loading within single-page applications. This project showcases nested routes, dynamic parameters, and a loader function for fetching data on specific routes.

- Utilizes `react-router-dom` for routing and nested route management.
- Implements route-based data fetching using a loader function.
- Features multiple page components, including Home, About, Contact, User, and Github.

## Tech Stacks :-

- React
- React Router DOM
- Tailwind CSS

## Router & Loader Explanation :-

1. **React Router**:
   - `react-router-dom` enables navigation between different components in a single-page application (SPA).
   - **createBrowserRouter**: Used to create a browser-based router for handling routes.
   - **Route**: Defines the path and the component to render for each route.
   - **Outlet**: Used in the `Layout` component to render nested routes, allowing shared layouts for different pages.
   - **Dynamic Routes**: The route `user/:userid` dynamically loads based on the `userid` parameter in the URL.

2. **Loader**:
   - The loader function, `githubInfoLoader`, fetches data before rendering the Github component.
   - Loader functions are useful for loading data as part of the navigation process, enhancing page performance.

## Components :-

1. **Layout**:
   - A shared layout with a Header and Footer, and uses `Outlet` to render nested components.

2. **Pages**:
   - **Home**: The homepage.
   - **About**: An information page.
   - **Contact**: Contact information page.
   - **User**: A dynamic page for displaying information based on the `userid` parameter.
   - **Github**: Fetches data from a loader function before rendering.


## Screenshots :-
![image](https://github.com/user-attachments/assets/6f727c4d-5be1-4db9-b4e8-17b93fa52bcf)


![image](https://github.com/user-attachments/assets/4b501952-c788-4015-a197-1aa45207e3a3)


## How to Use :-

1. Clone the repository:

    ```bash
        git clone https://github.com/AftabMankapure/React-Project.git
    ```

2. Navigate to the reactRouter directory:
    ```bash
        cd React-Project/reactRouter
    ```

3. Install dependencies:
    ```bash
        npm install
    ```

4. Start the development server:
    ```bash
        npm run dev
    ```

5. Open http://localhost:5173 to view it in the browser.

## Features :-

- **Nested Routes**: Uses nested routes to display components under a shared layout.
- **Dynamic Parameters**: Dynamic URL parameters, such as `userid`, allow for flexible page rendering.
- **Loader Function**: The Github component uses a loader function to fetch data before rendering, improving performance.
- **Modular Components**: Organized as separate components, including Header, Footer, and individual page components for clean code structure.


