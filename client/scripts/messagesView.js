var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // Parse.readAll((data) => {
    //   for (var i = 0; i < data.length; i ++) {
    //     $('<span class=message><div class=username>' + data[i].username + '</div>' + ': ' + data[i].text + '</span><br/>').appendTo('#chats');
    //   }
    // });
  },

  renderMessage: function(message) {
    // console.log('this is each message getting passed',message);
    var messagestring = '<div class=message><span class=username>' + message.username + '</span>' + ': ' + message.text + '</div>';
    $(messagestring).appendTo('#chats');


  }

};

// for (var i = 0; i < data.length; i ++) {

  // $('<span class=message>' + data[i].username+ ': '+data[i].text+'</span>').appendTo('#chats');

// var MessagesView = {

//   $chats: $('#chats'),

//   initialize: function() {
//   },

//   render: function() {
//   }

// };