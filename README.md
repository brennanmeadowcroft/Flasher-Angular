Flasher-Angular
===============

A simple library to provide "Rails-like" flash notifications across a site.  It handles basic messages that disappear on the next page load and also sitewide messages that are persistent throughout the user's session.

##Usage
###Setting up Flash Messages:
Inject the service into any controller you wish to be able to display messages
```javascript
app.myController('MyController', function($scope, FlashService) {
  /// Your controller content here...
});
```



###Create a new flash message:
```javascript
// Provides a default message with the "success" style
FlashService.flash('You have successfully flashed!'); // Single use flash message
FlashService.flashSitewide('Everybody is flashin\''); // Sitewide notification
```



###Changing the style:
The default styling is for a success flash message but that can be changed either by adding your own styles or using one of Bootstrap's included styles (http://getbootstrap.com/components/#alerts).  These include:
-- primary (blue)
-- success (green)
-- info (light blue)
-- warning (yellow)
-- danger (red)

Changing the alert style requires a second argument when creating a new flash:
```javascript
// Provides a message with the bootstrap style "alert alert-warning"
FlashService.flash('You have just flashed in style!', 'warning');  
```

If the Bootstrap styles aren't your thing, you can change the style inside the FlashService.



### Displaying Messages
Messages can be retrieved from the service in your controller using:
```javascript
$scope.flash_messages = FlashService.getMessages();
```
Messages are then returned in an array.
```
  {'sitewide':[{'style': 'alert alert-success', 'message':'Everbody is flashin\''}],
   'page':[{'style':'alert alert-success', 'message':'You have successfully flashed!'},
           {'style':'alert alert-warning', 'message':'You have just flashed in style!'}]}
```
You can loop through the array and provide your own styling.  Alternately, a directive has been created to handle that for you.  Inject the directive into your application and then add the directive to the top of the page where you want your message to appear and provide the variable that contains your messages:
```javascript
var app = angular.module('MyApp', [FlashService]);
```
```html
<div message-list messages="flash_messages"></div
```



##Roadmap:
- Dismiss messages
- Immediate messaging
