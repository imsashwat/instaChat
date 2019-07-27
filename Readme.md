![Screenshot]!(https://user-images.githubusercontent.com/30342542/61997755-2efe3100-b0c4-11e9-9f95-a8014f10939d.gif)
![Screenshot]!(https://user-images.githubusercontent.com/30342542/61997790-a03de400-b0c4-11e9-8ed9-b95d4eb40428.gif)


# InstaChat


A Real Time Chat Application built using Node.js, Express, Socket.io, Passport, sequelise, Postgres.

## Index
+ [Demo](#demo)
+ [Features](#features)
+ [Installation](#installation)
+ [How It Works](#how-it-works)
+ [Support](#support)
+ [Contribute](#contribute)
+ [License](#license)

## Demo<a name="demo"></a>
Check [Demo](https://instachatt.herokuapp.com/)

## Features<a name="features"></a>
+ Uses Express as the application Framework.
+ Manages Sessions using [express-session](https://github.com/expressjs/session) package.
+ Authenticates via username and password using [Passport](https://github.com/jaredhanson/passport).
+ Real-time communication between a client and a server using [Socket.io](https://github.com/socketio/socket.io).
+ Uses sequelise to synce database operations with MySql 

## Installation<a name="installation"></a>
### Running Locally
Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

1. Clone or Download the repository

	```
	$ git clone https://github.com/imsashwat/instaChat.git
	$ cd instaChat
	```
2. Install Dependencies

	```
	$ npm install
	```

3. Start the application

	```
	$ npm start
	```
Your app should now be running on [localhost:8000](http://localhost:8000/).

### Deploying to Heroku
Make sure you have the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

1. Create a new Heroku application, and push your chat application to a Git remote repository

	```
	$ heroku create
	$ git push heroku master
	```
	
	or
	
	[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

2. Now, you need to set up configuration variables on Heroku. 
	
3. Open your chat application in the browser

	```
	$ heroku open
	```

#### Session
The session needs a random string to make sure the session id in the browser is random. That random string is used to encrypt the session id in the browser, _Why?_ To prevent session id guessing.

### Session<a name="session"></a>
Session in Express applications are best managed using [express-session](https://github.com/expressjs/session) package. Session data are stored locally on your computer, while it's stored in the database on the production environment.

### User Authentication<a name="auth"></a>
User can login using either a username and password. User authentication is done using [Passport](https://github.com/jaredhanson/passport). Passport has extensive, and step-by-step [documentation](http://passportjs.org/docs/) on how to implement each way of authentication.

### Sockets<a name="sockets"></a>
Having an active connection opened between the client and the server so client can send and receive data. This allows real-time communication using TCP sockets. This is made possible by [Socket.io](https://github.com/socketio/socket.io).

The client starts by connecting to the server through a socket(maybe also assigned to a specific namespace). Once connections is successful, client and server can emit and listen to events. 


## Contribute <a name="contribute"></a>

Contribute by creating new issues, sending pull requests on Github or you can send an email at: Star1shashwat@gmail.com
