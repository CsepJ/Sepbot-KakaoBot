const scriptName = "셉봇소스";
importClass(org.jsoup.Jsoup);
let num = {}; //For UpDown Game
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
function translate (lan,clan,value){
  //Put Translating Code.
}
var FS = FileStream;
var blank = "​\u200b".repeat(1000);
var YBID = "안녕하세요! 셉봇입니다.\n\n=> '셉봇명령어'로 명령어를 보세요!"+blank+"\n\n\n───셉봇소식─── \n\n1.셉봇그래프 기능이 만들어졌습니다. (명령어를 참고 해주세요)";
const {functionCmd, gameCmd} = require("mainCmd");
function responseFix(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  const profile = java.lang.String(imageDB.getProfileImage()).hashCode();
  if (roomNames().includes(room)) {
    if (msg == "윤봇"||msg == "윤봇명령어"){
      replier.reply('아쉽지만, 셉봇으로 이름을 바꿨습니다!');
    }
    if (msg == "셉봇" || msg == "셉 봇" || msg == "셉봇아" || msg == "셉봇안녕" || msg == "셉봇 안녕" || msg == "Sepbot" || msg == "sepbot" || msg == "Sep bot" || msg == "sep bot" || msg == "SEPBOT" || msg == "셉벗" ||msg == "셉봇!"||msg == "굥봇"||msg == "SB"||msg == "sb"||msg == "tpqqht"||msg =="TPQQHT"){
      replier.reply(YBID);
    }
  var blank = "​\u200b".repeat(500);
  if (room != "1호방") {
    if (msg == "셉봇명령어" || msg == "셉봇 명령어" || msg == "셉봇도움말" || msg == "셉봇 도움말"||msg=="\"셉봇명령어\""||msg == "'셉봇명령어'"||msg == "\"셉봇 명령어\""||msg=="'셉봇 명령어'") {
      replier.reply("셉봇을 사용할수 있는 명령어 입니다!" + blank +  functionCmd + gameCmd);
    } else if (msg == "셉봇명령어F" || msg == "셉봇명령어f" || msg == "셉봇 명령어F" || msg == "셉봇 명령어f") {
      replier.reply("셉봇기능명령어입니다!\n눌러서 전체보기로 보세요!" + blank + functionCmd);
    } else if (msg == "셉봇명령어G" || msg == "셉봇명령어g" || msg == "셉봇 명령어g" || msg == "셉봇 명령어g") {
      replier.reply("셉봇게임명령어입니다!\n눌러서 전체보기로 보세요!" + blank + gameCmd);
    }
  }
  if (msg == "셉봇기종" || msg == "셉봇 기종" || msg == "셉봇기기" || msg == "셉봇 기기" ||msg=="셉봇기기정보"||msg == "셉봇 기기정보"||msg == "sp"||msg == "SP") {
    var appiis = Device.getPhoneModel();
    var ttia = Device.getBatteryLevel();
    var tte = Device.getBatteryTemperature() / 10;
    var ffau = Device.getAndroidVersionName();
    var 전원 = Device.isCharging() ? 'YES✅' : 'NO❌';
    replier.reply(" 실행중인 폰의 정보입니다."+ "\n\n안드로이드 버전 : " + ffau + "\n\n배터리 : " + ttia + "%" + "\n\n배터리온도 : " + tte + "°C\n\n충전여부 : " + 전원+"\n\n카카오톡 버전 : v"+Api.getContext().getPackageManager().getPackageInfo("com.kakao.talk",0).versionName);
  }
  if(msg == "셉봇UD" || msg == "셉봇 UD"){
    if(num.room){
      replier.reply("✽이미 게임이 시작되었습니다.✽\nYS 1~50으로 수를 맞춰보세요!\n\nYS30 : good\n30  : bad\nYS 30 : good");
    }else{
      num[room] = {
        number: Math.floor(Math.random() * 100)+1,
        try: 0
      }
      replier.reply("✽YS 1~50으로 수를 맞춰보세요!✽\n\nYS30 : good\n30  : bad\nYS 30 : good");
    }
  }else if(msg.startsWith("YS") || msg.startsWith("Ys") || msg.startsWith("ys") || msg.startsWith("yS")){
    if(num[room]["number"]&&num[room].try < 7){
      let number = parseInt(msg.slice(2).trim());
      if(isNaN(number)){
        //숫자 X
      }else{
        if(number.toString().length >= 4){
          replier.reply("숫자가 너무 높습니다.");
        }else{
          if(num[room].number > number){
            replier.reply(number + "보다 더 큽니다.");
          }else if(num[room].number < number){
            replier.reply(number + "보다 더 작습니다.");
          }else if(num[room].number == number){
            replier.reply(sender + "님이 맞추셨습니다!\n정답은 "+number+"였습니다!");
            delete num[room];
          }
        }
      }
    }else if(num[room].try >= 7){
      replier.reply("아쉽지만 더이상 기회가 없네요...!\n\n정답은 "+num[room].number+"였습니다...");
      delete num[room];
    }
  }//YS
  if (msg == "셉봇호출" || msg == "셉봇 호출") {
    var Isg = new Date();
    var Time = Isg.getHours();
    var min = Isg.getMinutes();
    var Dte = Isg.getDate();
    Api.makeNoti("호출",room+" \n "+sender + "님" + Dte + "일" + Time + "시" + min + "분");
    replier.reply("관리자에게 호출하셨습니다.\n\n관리자가 받지 않을 수도 있으니 양해부탁바랍니다.");
  }
  if (msg == "셉봇프로필"||msg == "셉봇 프로필") {
    try {
      replier.reply (sender+"님의 프로필코드는 "+profile+" 입니다.");
    }catch (e) {
      Log.e("Error occured at Sepbot Profile Function");
      replier.reply("에러가 발생했습니다...\n관리자에게 문의해주시길 바랍니다.");
    }
  }
}
if (msg.startsWith('셉봇분해 ')&&msg != "셉봇분해"){
  var spit = msg.substr(5);
  var result1 = spit.normalize('NFD').split('').join(' | ');
  replier.reply("결과 : "+result1);
}
if (msg.startsWith('셉봇 분해 ')&&msg != "셉봇 분해"){
  var spit1 = msg.substr(6);
  var result2 = spit1.normalize('NFD').split('').join(' | ');
  replier.reply('결과 : '+result2);
  }
  if (msg == "셉봇분해"||msg == "셉봇 분해"){
    replier.reply('셉봇분해 (내용)  형식으로 써주세요!');
  }
  if(msg.startsWith("셉봇번역 ")){
    try{
    nsg = msg.substr(5);
    result = translate('ko','en',nsg);
    r.reply("번역결과 : "+result);
    }catch(e){
      Log.e("Error occured at Sepbot Translate(Ko => En) Function");
      replier.reply("에러가 발생했습니다...\n관리자에게 문의해주시길 바랍니다.");
    }
    }
    if(msg.startsWith("셉봇 번역 ")){
    try{
    nsg = msg.substr(6);
    result = translate('en','ko',nsg);
    r.reply("번역결과 : "+result);
    }catch(e){
      Log.e("Error occured at Sepbot Translate(En => Ko) Function");
      replier.reply("에러가 발생했습니다...\n관리자에게 문의해주시길 바랍니다.");
    }
    }
    //시작
}