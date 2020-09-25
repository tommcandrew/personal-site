# Setting up an Express server

_27 December 2019_

Setting up a server in Node using the Express framework is very straightforward. First of all, you need to make sure you have Node installed on your computer. If you’re not sure you have it installed, you can check by entering this command in the terminal:

```
node -v
```

&nbsp;

If you have Node installed, this will tell you the version. If you don’t, you’ll see an error and then you should download Node.js from the website.

Once you’ve got Node installed on your computer, create a new folder for your application. Call it whatever you want. After that, you need to initialise your Node application by using the terminal to navigate to the folder you created and using the following command:

```
npm init
```

&nbsp;

It will ask you to fill in some info about the application (name, author etc.) but, if you want, you can just hit enter on each field to leave them all blank.

When this is finished, your folder should contain a new package.json file. This file will contain information about any third-party packages you install in your application.

While you don’t have to use Express to set up a server on Node, it’s the easiest method. Install Express via the terminal with the following command:

```
npm install express
```

&nbsp;

or the short version:

```
npm i express
```

&nbsp;

After this has installed, open a new file in your text editor. You can call it server.js. The first thing to do is require Express at the top of the file like this:

```javascript
const express = require("express");
```

&nbsp;

Note that in Node you have to use the CommonJS syntax (using 'require') rather than the ES6 module syntax (using 'import') which you might be used to from React.

Next, create your server by calling Express (this variable is typically named 'app' but some people prefer 'server'):

```javascript
const app = express();
```

&nbsp;

And, finally, tell it to listen to a port on your machine like this:

```javascript
app.listen(5000);
```

&nbsp;

You can choose whichever port you like, as long as nothing else is running on it. You can also include a callback with a `console.log` to confirm that it’s connected successfully:

```javascript
app.listen(5000, () => {
  console.log("listening on port 5000");
});
```

&nbsp;

And that’s it! Now all you need to do is start your application with the command:

```
node server.js
```

&nbsp;

Your server should now be running and listening on port 5000 and you should see the `console.log` message in the terminal.

However, if you visit localhost:5000 in your browser, you won’t see much as you haven’t told the server to actually do anything. You can get it to display a message like this:

```javascript
app.get("/", (req, res) => {
  res.send("I just built my first Express server!");
});
```

&nbsp;

This tells your server that whenever a user navigates to its main url ('/'), that it should send back that string as a response ('res').

To see this, stop your app running with `ctrl + c`.

Then run it again and, if you refresh your browser, you should see the message displayed.

Congratulations! You now know how to set up a server in Node. You can build on this by adding different routes which send back different messages. For example:

```javascript
app.get("/about", (req, res) => {
  res.send("Welcome to the About page!");
});
```

&nbsp;

If you don't want to have to restart your server every time you make a change, you can install an npm package called nodemon and use this to start your server instead of node:

```javascript
nodemon server
```

&nbsp;

Note that it's not necessary to include the .js file extension when you use node or nodemon to start your server.
