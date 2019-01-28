# Source Loader

On page load JavaScript is executed to sequentially load other JavaScript files on demand. 
If there is more than one script then it will wait until the previous script has loaded before getting the next.

Expected Outcome:
The expected result is one or more more script tags inserted into the pages markup. Resulting in those files being loaded.

## Available Scripts

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>

### `npm test-functional`

Launches the selenium test runner, dev server must be running.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
