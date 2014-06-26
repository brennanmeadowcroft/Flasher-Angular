Flasher-Angular
===============

A simple library to provide "Rails-like" flash notifications across a site.  It handles basic messages that disappear on the next page load and also sitewide messages that are persistent throughout the user's session.


Usage:

Inject the service into any controller you wish to be able to display messages
'''javascript

'''

Create a new flash message
'''javascript
FlashService.flash('You have successfully flashed!');
'''

The default styling is for a success flash message but that can be changed either by adding your own styles or using one of Bootstrap's included styles.  These include:
-- primary (blue)
-- success (green)
-- info (light blue)
-- warning (yellow)
-- danger (red)

Changing the alert style is a second variable when creating a new flash:
'''javascript
FlashService.flash('You have just flashed in style!', 'warning');  
'''

Roadmap:
-- Dismiss messages
-- Immediate messaging
