# Recipe App

A React-based recipe application with search, filters, pagination, favourites, and detailed recipe pages.

This project was created as a learning and portfolio project to practice modern FE development with React.

# Features

- Home page with banners and animated recipe carousel

- Recipes list with:

    - Search by title (debounced)
    - Filters by category, difficulty and cooking time
    - Pagination (6 recipes per page)

- Recipe details page with recipe parameters, ingredients, steps and favourite option

- Favourites page with persistent data stored in localStorage

- Empty states for search results and favourites

- Shared header and footer across all pages


# Tech Stack

1. React
2. React Router
3. JavaScript (ES6+)
4. SCSS
5. LocalStorage


# Project Structure

src/
├── assets/
├── components/
    ├── {components_folders}/
        ├── {component.jsx}
        ├── {component.scss}
├── data/
├── pages/
├── styles/
├── App.jsx
├── index.css
└── index.js


# Getting Started

1. Clone the repository:

`[git clone https://github.com/Anastasiia_Hr/my-recipe-app.git](https://github.com/Nastia2333/my-recipes-app.git)`


2. Install dependencies:

`npm install`


3. Start the development server:

`npm start`


4. The application will run at [http://localhost:3000].



# Notes

- The project does not use a backend part; all data is handled on the client side.
- Favourite recipes are saved in localStorage and persist after page reload.
- Recipe cards differ between pages to allow flexible layouts and styles.


# Author

Created by Anastasiia Hrynenko
