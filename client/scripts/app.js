var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    // console.log(this.username);
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      console.log('parse read all has run');
      for (var i = 0; i < data.results.length; i ++) {
        if (data.results[i].hasOwnProperty('username')) {
          $('<span class=message>' + data.results[i].username+ ': '+data.results[i].text + '\n' +'</span>').appendTo('#chats');
        }
      }
      console.log(data);
      callback();


    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

// var App = {

//   $spinner: $('.spinner img'),

//   username: 'anonymous',

//   initialize: function() {
//     App.username = window.location.search.substr(10);

//     FormView.initialize();
//     RoomsView.initialize();
//     MessagesView.initialize();

//     // Fetch initial batch of messages
//     App.startSpinner();
//     App.fetch(App.stopSpinner);

//   },

  // fetch: function(callback = ()=>{}) {
  //   Parse.readAll((data) => {
  //     // examine the response from the server request:
  //     console.log(data);

  //     callback();
  //   });
  // },

//   startSpinner: function() {
//     App.$spinner.show();
//     FormView.setStatus(true);
//   },

//   stopSpinner: function() {
//     App.$spinner.fadeOut('fast');
//     FormView.setStatus(false);
//   }
// };