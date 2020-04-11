
#  Conway's Game of Life React
This is an implementation of Conway's Game of Life using Typescript, React, and Socket io along with a [Nodejs](https://github.com/ryuash/game-of-life-nodejs) server on the backend.

The app is currently not responsive and only supports desktop width devices. Semantic UI has been used in parallel with styled components to create a soft and simplified UI.

If the user is disconnected from the server none of their actions will have an effect on the future generations.

The [app](https://gol-react-ryuash.herokuapp.com/) is currently hosted on heroku.

##  Quick start

###  Prerequisites
If you haven't already, go ahead and download the lastest LTS version of [node](https://nodejs.org/en/) as npm would be needed to complete the installation.

### Environment variable
In the root directory create a `.env` file and paste `REACT_APP_API=https://thawing-river-17731.herokuapp.com/`

###  Installing

`npm install`

###  Starting the dev environment

`npm run start:dev`

A react development server will be started on `http://localhost:3000/`.

  

##  Available scripts

In the project directory, you can run:

###  `npm start`

Runs the app in the development mode.<br />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

You will also see any lint errors in the console.

  

###  `npm build`

  

Builds the app for production to the `build` folder.<br />

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.<br />

Your app is ready to be deployed!

  

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  

###  `npm eject`

  

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

  

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

  

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Heroku
###  Prerequisites
- Create an account at [Heroku](https://signup.heroku.com/)
- Install the [HerokuCLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
- In your terminal `heroku login`
### Deploying
- Make sure your terminal location is the root of your project.
- In you terminal `heroku create` or `heroku create [your-app-name]` .
- Set up the environment variable by typing `heroku config:set REACT_APP_API=https://thawing-river-17731.herokuapp.com/` in your terminal.
#### Manual deployment
A remote pointing to your new heroku app has already been setup by `heroku create`. To deploy, simply push a master branch to the heroku remote with `git push heroku master`.
#### Other methods of deployment
Heroku has tons of methods around deployment. If manual deployment does not fit you need please check out their [deployment documentation](https://devcenter.heroku.com/categories/deployment) for CI/CD integrations.
## Technical choices
I decided to leverage React and it's virtual DOM to handle the heavy DOM manipulation surrounding the game of life. Following React's principles of reusable components, I created reusable components and kept states as local as possible.

Typescript was used with react in order to give javascript more features and catch bugs before they happen.

Cookies were also used to keep track of the user identity in the event of a disconnect. The user would have 30 seconds to reconnect to the same color.
## Tradeoffs and comments
After some research I found out `canvas` could have been a better option instead of the traditional `table` in terms of speed and usage, but due the time constraint I decided to not make the switch.

I decided to not make the app device responsive due to time constraints.

The screen loading effects were not done as well as I had hoped. UI/UX enhancements would need to be made in regards to loading.

Socket io is causing way more rerenders that I would like. Performance enhancement such as a comparator function would need to be made in the future.
