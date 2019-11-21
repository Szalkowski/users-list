# Users list
Project based on create-react-app with mobx, routing and hooks. <br>
This project priorities were get users list from public endpoint: `https://jsonplaceholder.typicode.com/users` figure out names and nicknames from list and set up input to filter by name. No matter capital or small letter you type in it, it going to find what you looking for.

## Playground
If you want to see how it's look and work just click [this link](https://szalkowski.github.io/users-list)

## Set up
1. Clone repo to your local machine
2. Enter to your project directory
3. `yarn install`
4. Read next section to find out whitch script you need to use

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn deploy`
It build app for production and publish it on github page that you have to set in `package.json` in `homepage` key.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
