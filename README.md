Deployed: https://adrianb13.github.io/ReactRedux-Workout/

This is the Front-End of a React, Redux, Spring Boot, Java, SQL CRUD application.
The full application is a Workout List you can use to keep track/remind you of your workout routine steps.  Sometimes you may want to modify your routine because you have exceeded your previous goal and want to do more Reps, or maybe add notes to what you are actually doing.

This can also be used as a front-end for a Node.js backend application or external website. It uses "axios" npm package for the API requests.  You only need to modify the API request URLs as needed.  These connects can be found in the "src/utils/" folder under "API.js".

It uses only a single-page to dispay your Create, Read, Update, and Delete options.  The react-router was implemented and can be use to expand the capabilities of the application with extra features. But for now is only used to display this simple application.

Redux is implemented to control the states as well as allow for easier expansion of the application for additional features that may be needed or come handy as the application evolves.

The backend is deployed here: https://workout-list-java.herokuapp.com/ (in Heroku)
- For a GET call the URL would be: https://workout-list-java.herokuapp.com/api/steps (this will post a json on your browser of pre-loaded data that is presented in the React portion of the app.

