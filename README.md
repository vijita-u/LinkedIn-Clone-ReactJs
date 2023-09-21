# LinkedIn-Clone-ReactJs

![LinkedIn Mockup](https://github.com/vijita-u/LinkedIn-Clone-ReactJs/assets/96591032/582cdeb3-eba0-4fc2-8105-201ff7b9c80d)


## Live Link : [LinkedIn Clone Live Link](https://linkedin-clone-using-reactjs.web.app/)

## Overview
This web application, built with React JS, closely mirrors LinkedIn's functionality. It relies on Redux for efficient state management, Firebase for user authentication and deployment, and Firestore for real-time post tracking. Furthermore, it features a responsive design, ensuring a seamless LinkedIn-like experience across diverse devices.

## Technologies Used
1. ReactJS
2. Firebase (User authentication and Firestore)
3. Redux (State Management)
4. Sass (Styling)

## Project Features

### Frontend
1. **ReactJs**: The project leverages React.js for the frontend to closely resemble the actual linkedIn.
2. **Redux**: Used to efficiently manage state of user.
4. **Firebase Authentication**: Employed for user authentication, providing robust and secure login and registration functionalities.
5. **Sass Styling**: Styling is organized and modular with Sass, enhancing maintainability and scalability.

### Backend
1. **Firebase Firestore**: Utilized for the administration of user-generated posts, offering capabilities for both adding and removing content.

## Project Structure

```
- /src
  - /app
    - store.js
  - /components
    - App.js
    - App.scss
    - Feed.js
    - Feed.scss
    - ...
  - /features
    - userSlice.js
  - /firebase
    - firebaseConfig.js
  - /scss
    - /utils
      - ...
    - style.scss
  - index.js
  - index.scss
```

## Getting Started

### Installation
1. Clone the repository
   ```
     git clone https://github.com/vijita-u/LinkedIn-Clone-ReactJs.git
   ```
2. Install dependencies using npm:
   ```
     npm install
   ```

### Usage
1. Start the development server:
   ```
     npm start
   ```
2. Access the web application through your browser.
3. Register your account, Sign in again, add posts, delete posts, like or unlike posts, sign out from account.

### Deployment
To deploy the project

1. Create a Firebase project and configure Firebase settings in **/src/firebase/firebaseConfig.js**.
2. Login to firebase through command line
   ```
     firebase login
   ```
3. Initialize firebase project
   ```
     firebase init
   ```
4. Build the project:
   ```
     npm run build
   ```
5. Deploy to firebase:
   ```
     firebase deploy
   ```

## Credits

- This project was inspired by the original [LinkedIn](https://www.linkedin.com/) website and [Sonny Sangha's LinkedIn Clone](https://www.youtube.com/live/QaYts9sPmcY?si=GL6Bd307o4iSWZZL).
- [Firebase](https://firebase.google.com/) for real-time database, authentication, and hosting.

## License
This project is open-source and available under the [MIT License](https://github.com/vijita-u/LinkedIn-Clone-ReactJs/blob/main/LICENSE).


## Contact
- [Email me](mailto:udayvijita3009@gmail.com?subject=Github%20Message)

- [Let's connect on LinkedIn](https://www.linkedin.com/in/vijita-uday/)
