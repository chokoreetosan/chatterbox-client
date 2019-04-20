var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(roomName) {
    roomNameString = '<div>' + roomName + '</div>';
    $(roomNameString).appendTo('#rooms select');

  }

};


// var RoomsView = {

//   $button: $('#rooms button'),
//   $select: $('#rooms select'),

//   initialize: function() {
//   },

//   render: function() {
//   }

// };