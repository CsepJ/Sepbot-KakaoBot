const scriptName = "셉봇확대";

function onNotificationPosted(sbn, sm) {
    var packageName = sbn.getPackageName();
    if (!packageName.startsWith("com.kakao.tal")) return;
    var actions = sbn.getNotification().actions;
    if (actions == null) return;
    var act = actions[actions.length - 1];
    var bundle = sbn.getNotification().extras;    
    var msg = bundle.get("android.text").toString();
    var sender = bundle.getString("android.title");
    var room = bundle.getString("android.subText");
    if (room == null) room = bundle.getString("android.summaryText");
    var isGroupChat = room != null;
    var replier = new com.xfl.msgbot.script.api.legacy.SessionCacheReplier(packageName, act, room, false, "");
    var icon = bundle.getParcelable('android.messagingUser').getIcon().getBitmap();
    var image = bundle.getBundle("android.wearable.EXTENSIONS");
    if (image != null) image = image.getParcelable("background");
    var imageDB = new com.xfl.msgbot.script.api.legacy.ImageDB(icon, image);
    com.xfl.msgbot.application.service.NotificationListener.e.put(room, act);
    responseFix(room, msg, sender, isGroupChat, replier, imageDB, packageName);
}
function responseFix(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if (roomNames().includes(room)) {
      try {
  if (msg.indexOf ("셉봇확대 ")==0 && msg.substr(4).trim().length < 5) {
    var A = msg.slice(5);
for(i=0;i<A.length;i++){
replier.reply(A[i]+"\u200d");
java.lang.Thread.sleep(1000);
}

}
  }catch(e){
    replier.reply ("오류가 났습니다.\n\n"+e.message);
  }
}
}