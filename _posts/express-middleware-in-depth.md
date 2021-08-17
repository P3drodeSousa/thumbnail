---
title: "How To Use And Write Express Middleware"
description: "How passing functions to other functions works in JavaScript."
thumbnail_bg: "#008F7A"
date: "December 09, 2019"
tags: ["JavaScript", "Node.js"]
---

Middleware is an often misunderstood topic since it sounds and appears very complicated, but in reality middleware is actually really straightforward. The entire idea of middleware is to execute some code before the controller action that sends the response and after the server gets the request from the client. Essentially it is code that executes in the middle of your request, hence the name middleware. Before I get too in depth on the details of middleware, though, I want to setup a basic Express server with two routes.

# Setting Up An Express Server
To get started working with a Node.js project you will need to run npm init -y. This will create a basic package.json file with all of the default values filled in for you. From there the next thing to do is install Express by running npm i express. Lastly, we need to create a server.js file with the following code.

This server.js file simply sets up a server on port 3000 that has two routes, a home page route and a users page route. The last thing to do is run node server.js to start up the application and if everything worked you should see a message in the console saying Server Started. You can then open up any browser to localhost:3000 and you should see the message Home Page. If you go to localhost:3000/users you should then see the message Users Page.

That is all the basic setup we will need for the rest of this article. As we make changes you will need to restart your server in the console to see the changes take effect.

# What Is Middleware?
I talked briefly about middleware as functions that execute after the server receives the request and before the controller action sends the response, but there are a few more things that are specific to middleware. The biggest thing is that middleware functions have access to the response (res) and request (req) variables and can modify them or use them as needed. Middleware functions also have a third parameter which is a next function. This function is important since it must be called from a middleware for the next middleware to be executed. If this function is not called then none of the other middleware including the controller action will be called.

This is all a bit difficult to understand just from text so in the next section we are going to create a logging middleware that will log the url of the request a user makes.

# How To Create Logging Middleware
As I mentioned in the previous section, middleware takes three parameters, req, res, and next, so in order to create middleware we need to create a function that has those three inputs.

We now have the shell of a basic middleware function defined with some placeholder content, but the application is not using it. Express has a few different ways you can define middleware to be used, but for this example we will make this middleware execute before every single controller action by adding it to the application level. This can be done by using the use function on the app variable like this.

The application is now using the middleware that we defined and if we restart our server and navigate to any of the pages in our app you will notice that in the console the message Inside Middleware appears. This is great, but there is a slight problem. The application now loads forever and never actually finishes the request. This is because in our middleware we are not calling the next function so the controller action never gets called. We can fix this by calling next after our logging.

Now if you restart the server you will notice that everything is logging correctly, and the web page is properly loading. The next thing to do is to actually log out the URL that the user is accessing inside the middleware. This is where the req variable will come in handy.

The logging middleware is now working 100% correctly on all the routes in the application, but we have only scratched the surface on the usefulness of middleware. In the next example we are going to take a look at creating a simple authorization middleware for the users page.

# Advanced Middleware Example
To get started we need to create another function to use as middleware.
This is just a shell of a function to be used as middleware, but we can add it to our users page route now in order to ensure that our middleware is only being executed on the users page route. This can be done by adding the function as a parameter to the app.get function for the users page.

Now if you restart the server and go to the users page you should see the message authorizeUsersAccess Middleware, but if you go to the home page this message will not show up. We now have middleware that only executes on a single route in the application. The next thing to do is fill in the logic of this function so that if the user does not have access to the page they will get an error message instead.

This middleware now checks to see if the query parameter admin=true is in the URL and if it is not an error message is shown to the user. You can test this by going to http://localhost:3000/users and you will see an error message explaining that you are not a admin. If you instead go to http://localhost:3000/users?admin=true you will be sent the normal users page since you set the query parameter of admin to true.

One other thing that is really useful with middleware is the ability to send data between middleware. There is no way to do this with the next function, but you can modify the req or res variables to set your own custom data. For example in the previous example if we wanted to set a variable to true if the user was a admin we could easily do that.

# Conclusion
That is all there is to know about middleware. Middleware is incredibly powerful for cleaning up code and making things like user authorization and authentication much easier, but it can be used for so much more than just that because of the incredible flexibility of middleware.