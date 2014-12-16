# Boilerplate for AngularJS + Sails.js

### Why?
Modern web applications has separated front- and backend sides to use. This boilerplate present one way to make
<em>your</em> application which have fully separated back- and frontend sides.

### Main goals of this boilerplate
* Separate back and front development apps
* Authenticate with backend (possible multiple ways: local, github, twitter, etc.)
* WebSockets
* Minimal - I hate bloated boilerplates

## Setup

<pre>
npm install bower -g
npm install sails -g
</pre>

1. Frontend landing page: <code>/frontend/src/app/index.html</code>
2. Backend URL: <code>io.sails.url</code> (customize in <code>frontend/config/config.json</code>)
3. Copy <code>/backend/config/local_example.js</code> to <code>/backend/config/local_example.js</code> and customize
4. Install Dependencies: <code>npm install</npm> (runs <code>npm/bower install</code> from frontend and backend folders)

## Running
You have to start both <code>backend</code> and <code>frontend</code> servers to run this project. These can
be started

#### Backend
<pre>
cd backend
sails lift
</pre>

#### Frontend
**In Development:**
<pre>
cd frontend
gulp serve
</pre>

**In Production:**
<pre>
cd frontend
gulp dist
gulp production
</pre>


## Resources

* Sails.js, http://sailsjs.org/
* AngularJS, https://angularjs.org/
* AngularUI Router https://angular-ui.github.io/ui-router
* Json Web Tokens, http://angular-tips.com/blog/2014/05/json-web-tokens-examples/

## Author
[Dean Sofer](https://github.com/ProLoser)  
Tarmo Leppänen

## License
The MIT License (MIT)

Copyright (c) 2014 Tarmo Leppänen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
