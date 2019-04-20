var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll((data) => {
      for (var i = 0; i < data.length; i ++) {
        $('<span class=message>' + data[i].username+ ': '+data[i].text+'</span>').appendTo('#chats');
      }
    });
  },

  renderMessage: function(message) {

    var messagestring = '<div>'+message.username+ ': '+message.text+'</div>';
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