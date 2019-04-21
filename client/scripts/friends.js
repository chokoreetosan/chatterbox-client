var Friends = {
  listOfFriends :{},

  toggleStatus: function(){
    console.log($(this).html())
  if(!Friends.listOfFriends.hasOwnProperty($(this).html())){
    Friends.listOfFriends[$(this).html()] = true;
    // Friends.listOfFriends[$(this).html()] = true;
    console.log('new friend entry');
  }else if(Friends.listOfFriends[$(this).html()]===true){
    Friends.listOfFriends[$(this).html()] = false;
  }else{
    Friends.listOfFriends[$(this).html()] = true;
  }
  // return false;
}

};