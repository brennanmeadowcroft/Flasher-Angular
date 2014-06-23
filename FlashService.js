app.service('FlashService', [function() {
  var _messages = [];
  var _messagesPersistent = [];
  var _defaultStyle = 'success';  // Default style for a given alert.
  var _stylePrefix = 'alert alert-';  // Style prefix for alert styles.  Defaulted to something bootstrap compatible

  _classyUp = function(style) {
    // Create the appropriate class name for a style... currently defined based on Bootstrap styles.  You can define custom styles in your project's CSS
    return 'alert alert-' + style;
  }

  this.setStylePrefix = function(prefix) {
    _stylePrefix = prefix;
  };
  this.setDefaultStyle = function(style) {
    _defaultStyle = style;
  };
  this.flash = function(message, style) {
    // Add a flash message to an array for display on next page
    if(!style) { style = _defaultStyle }
    new_message = { 'message': message, 'style': _classyUp(style) };
    _messages.push(new_message);
  }
  this.flashSitewide = function(message, style) {
    // Add a flash message to an array for display across the entire site
    if(!style) { style = _defaultStyle }
    new_message = { 'message': message, 'style': _classyUp(style) }
    _messagesPersistent = [new_message];
  }
  this.dismissMessage = function(index) {
    // Allows the user to dismiss a particular persistent message
    _messagesPersistent.splice(index, 1);
  }
  this.clearAllMessages = function() {
    _messages = [];
    _messagesPersistent = [];
  }
  this.getMessages = function() {
    // Provide messages to the page
    page_messages = _messages;
    persistent_messages = _messagesPersistent;

    // Create message response
    var displayed_messages = [];
    displayed_messages['page'] = page_messages;
    displayed_messages['sitewide'] = persistent_messages;
    
    // Clear out the single flash messages since it only gets shown on one page
    _messages = [];

    return displayed_messages;
  }

  return this;
}]);
