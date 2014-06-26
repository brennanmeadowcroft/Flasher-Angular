Flasher-Angular
===============

A simple library to provide "Rails-like" flash notifications across a site.  It handles basic messages that disappear on the next page load and also sitewide messages that are persistent throughout the user's session.

##Usage
###Setting up Flash Messages:
Inject the service into any controller you wish to be able to display messages
```javascript

```



###Create a new flash message:
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

Changing the alert style is a second variable when creating a new flash:
```javascript
FlashService.flash('You have just flashed in style!', 'warning');  
// Provides a message with the bootstrap style "alert alert-warning"
```

If the Bootstrap styles aren't your thing, you can change the style inside the FlashService.



### Displaying Messages
Messages can be retrieved from the service in your controller using:
```javascript
app.controller('MyController', function($scope, FlashService) {
  $scope.flash_messages = FlashService.getMessages();
});
```
Messages are returned in an array.
```
  {'sitewide':[{'style': 'alert alert-success', 'message':'Everbody is flashin\''}],
   'page':[{'style':'alert alert-success', 'message':'You have successfully flashed!'},
           {'style':'alert alert-warning', 'message':'You have just flashed in style!'}]}
```
You can loop through the array and provide your own styling.  Alternately, a directive has been created to handle that for you.  Add the directive to the top of the page where you want your message to appear and provide the variable that contains your messages:
```html
<div message-list messages="flash_messages"></div
```



##Roadmap:
- Dismiss messages
- Immediate messaging
