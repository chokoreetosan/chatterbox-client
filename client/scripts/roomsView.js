var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $('#rooms button').on('click', Rooms.add);
  },

  renderRoom: function(roomName) {
    roomNameString = '<option>' + roomName + '</option>';
    $(roomNameString).appendTo('#rooms select');
    Rooms.add(roomName);
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