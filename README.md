# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# check .env file if server url and port chnages

# Points
Design - Not implemented (generic theme is added, refer to theme.ts file and login and sign up pages)

# Design - Use Material design as per your preference


# Pages Details:
local path + pages url. example: http://localhost:3000/
/login -, form validation, verification if after login role based routing is working fine or not, 
/signup - Add more fields in the form (check the requirements and update background accordingly), form validation, 
/books - All Books - only data display without design - impmentation of search, edit delete options w.r.t role are pending
/book/1 - API Pending, API - Data Display Pending
/create - Implementation pending 

# Pending:
lazy loading
create and edit book page implementation (enable edit mode if user selects edit, get the data from API and display in the field, enable edit only fields, Button text will change to Update in the case of edit)
Success and Failure messages (Error handling/alerts)
Security Headers - mimportant
form validation


# Refer to requirment docs 
like review etc
