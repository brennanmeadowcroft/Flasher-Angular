Flasher-Angular
===============

A simple library to provide "Rails-like" flash notifications across a site.  It handles basic messages that disappear on the next page load and also sitewide messages that are persistent throughout the user's session.


##Usage
###Setting up Flash Messages:
Inject the service into any controller you wish to be able to display messages
```javascript
app.controller('MyController', function($scope, FlashService) { ... });
```

###Create a new flash message:
Creating a flash message is easy:
```javascript
FlashService.flash('You have successfully flashed!'); // Single use flash message
FlashService.flashSitewide('Everybody is flashin\''); // Sitewide notification
```

###Changing the style:
The default styling is for a success flash message but that can be changed either by adding your own styles or using one of Bootstrap's included styles.  These include:
-- primary (blue)
-- success (green)
-- info (light blue)
-- warning (yellow)
-- danger (red)

Changing the alert style is a second argument when creating a new flash:
```javascript
FlashService.flash('You have just flashed in style!', 'warning');  
// Provides a message with the bootstrap style "alert alert-warning"
```

If the Bootstrap styles aren't your thing, you can change the style inside the FlashService for all styles by calling the appropriate method anywhere in your application:
```javascript
FlashService.setStylePrefix('my-super-awesome-style-');
FlashService.setDefaultStyle('warning');
```
**Note:** Whatever you set as the style prefix will always be prepended to the style you include as the second argument.  To set a single default style, change the prefix to a blank string and then alter your default styles, like so:
```javascript
FlashService.setStylePrefix('');
FlashService.setDefaultStyle('my-single-awesome-style');
```


### Displaying Messages
Messages can be retrieved from the service in your controller using:
```javascript
$scope.flash_messages = FlashService.getMessages();
```
Messages are returned in an array.
```
  {'sitewide':[{'style': 'alert alert-success', 'message':'Everbody is flashin\''}],
   'page':[{'style':'alert alert-success', 'message':'You have successfully flashed!'},
           {'style':'alert alert-warning', 'message':'You have just flashed in style!'}]}
```
You can loop through the array and customize the styling of your messages however you prefer.  Alternately, a directive has been created to make it a bit easier.  Inject the directive into your application and then add the directive to the top of the page where you want your message to appear and provide the variable that contains your messages:
```javascript
app = angular.module('MyApp', ['FlashMessages']);
```
```html
<div message-list messages="flash_messages"></div
```

##Roadmap:
- Dismiss messages
- Immediate messaging
