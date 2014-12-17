frontend
============
This is an example AngularJS application to demonstrate how to use separate back- and frontend applications. Currently

* Login with backend
* JWT token authentication after login

## Used components
This frontend application uses following 3rd party libraries to make all this magic happen.

* AngularJS (https://github.com/angular/angular.js)
* AngularUI Router (https://github.com/angular-ui/ui-router)
* angularSails (https://github.com/balderdashy/angularSails)
* Sails JavaScript Client SDK (https://github.com/balderdashy/sails.io.js)

Note that this list may not be complete.

## Development

To start developing in the project run:

```bash
gulp serve
```

Then head to `http://localhost:3001` in your browser.

The `serve` tasks starts a static file server, which serves the AngularJS application, and a watch task which watches
all files for changes and lints, builds and injects them into the index.html accordingly.

## Tests

To run tests run:

```bash
gulp test
```

**Or** first inject all test files into `karma.conf.js` with:

```bash
gulp karma-conf
```

Then you're able to run Karma directly. Example:

```bash
karma start --single-run
```

## Production ready build - a.k.a. dist

To make the app ready for deploy to production run:

```bash
gulp dist
```

Now there's a `./dist` folder with all scripts and stylesheets concatenated and minified, also third party libraries
installed with bower will be concatenated and minified into `vendors.min.js` and `vendors.min.css` respectively.

To run your deployment code run:

```bash
gulp production
```

Then head to `http://localhost:3000` in your browser.
