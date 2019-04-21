var Rooms = {

  rooms: new Set(),

  add: function(roomname){
    Rooms.rooms.add(roomname);
  },

  update: function(messages){
    _.chain(messages).pluck('roomname').uniq().each(room => Rooms._data.add(room));
  }

}