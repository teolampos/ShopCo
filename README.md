# Project Folder Structure

public ---> contains icons, images and the main html file

src ----> fonts (contains the fonts used in the webpage)

    ----> helpers (contains essential functions used through out our code)

    ----> routes (contains one folder for each route in our app) --- components (components that make up the route's Main Component)
                                                                 --- Main component.tsx

# Styling

The styling of the website is done with Tailwind CSS.

Methdology used: 1.For every element we first add the class utilites for smaller devices and then we move on to bigger screens.
2.For every element we first add the class utilites that have to do with the layout (eg. width, height, margin etc.) and then the ones
that have to do with the Typography and Colors.

# How to Setup

1. Open Terminal
2. Run 'git clone (git url)' to clone the project locally.
3. Run 'npm install' to install npm packages.
4. Run 'npm start' to start the dev server.
