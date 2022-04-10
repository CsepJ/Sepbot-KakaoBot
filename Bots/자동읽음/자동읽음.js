const scriptName = "자동읽음";

let rooms = {};
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if(roomNames().includes(room)){  if(rooms[room]){
    rooms[room] += 1;
  }else{
    rooms[room] = 1;
  }
  try{
    if(rooms[room] >= 50 && isGroupChat){
      replier.markAsRead();
      rooms[room] = 0;
    }
  }catch(e){
    Log.e(e.message)
  }
}
}
