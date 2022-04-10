const scriptName = "셉봇카링";
const kalingModule = require('kaling.js').Kakao();
const Kakao = new kalingModule;
Kakao.init(''); 
Kakao.login('', ''); 
var FS = FileStream;
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
  if (roomNames().includes(room)){
  try{
    var eat = ["피자", "치킨", "햄버거", "닭꼬치", "닭강정", "돼지갈비", "갈치조림", "국밥", "김치찌개", "아구찜", "떡갈비", "쇠고기", "스테이크", "랍스터", "삼겹살", "라면", "카레라이스", "오므라이스", "칼국수", "된장찌개", "탕수육", "케이크", "깐풍기", "짬뽕", "짜장면", "짬짜면", "돼지고기", "소고기", "장어"];
   if (room != "1호방") {
    if (msg === "셉봇메뉴" || msg === "셉봇 메뉴" || msg === "셉봇점심" || msg === "셉봇저녁" || msg === "셉봇 아침" || msg === "셉봇아침" || msg === "셉봇 점심" || msg === "셉봇 저녁" || msg === "셉봇아침메뉴" || msg === "셉봇 아침메뉴" || msg === "셉봇 아침 메뉴" || msg === "셉봇점심메뉴" || msg === "셉봇 점심메뉴" || msg === "셉봇 점심 메뉴" || msg === "셉봇저녁메뉴" || msg === "셉봇 저녁메뉴" || msg === "셉봇 저녁 메뉴") {
      var 최종음식 = eat[Math.floor(Math.random() * eat.length)];
      var t = 최종음식.length - 1;
    if(최종음식[t].normalize('NFD').split('').length==3){
      Kakao.send(room,{
  "link_ver": "4.0", 
  "template_id": 34795,
  "template_args": {
    main: '☆오늘의 메뉴☆',
  title6: "오늘은 "+최종음식+"을 드셔보시는건 어떠신가요?", 
  img6: 'https://i.imgur.com/c8QWuMY.png'}
}, "custom");
  }
    else  if(최종음식[t].normalize('NFD').split('').length==2){
      Kakao.send(room,{
  "link_ver": "4.0", 
  "template_id": 34795,
  "template_args": {
    main: '주문하신 '+최종음식+"입니다!",
  title6: 최종음식+"를 드셔보시는건 어떠신가요?", 
  img6: 'https://i.imgur.com/c8QWuMY.png'}
}, "custom");
  }}
    }
      
  }catch(e){
    replier.reply(e.message);
    
  }
  if (msg === "셉봇코로나" || msg === "셉봇 코로나" || msg === "셉봇코로나정보" || msg === "셉봇 코로나정보" || msg === "셉봇 코로나 정보") {
    try {
      let covidData = JSON.parse(Jsoup.connect("").ignoreContentType(true).get().text())    
      var 확진 = covidData.korea.totalCnt;
      var 완치 = covidData.korea.recCnt;
      var 사망 = covidData.korea.deathCnt;
      Kakao.send(room, {
        "link_ver": "4.0", 
        "template_id": 34942, 
        "template_args": {
        body10: comma(확진) + "명", 
        body11: comma(완치) + "명", 
        body12: comma(사망) + "명"
      }
    }, "custom");
  }catch (error) {
      Api.reload();
      Log.e(error.message);
    }
  }
try {
if (msg == "셉봇 가위"||msg == "셉봇가위"||msg == "셉봇S"||msg == "셉봇 S"){
  var RPS1 = ["저는 보를 냈는데...\n져버렸네요...ㅂㄷㅂㄷ","저는 가위를 냈어요!\n하지만 비겼네요..ㅠ","저는 주먹을 냈어요!\n제가 이겼네요ㅎㅎㅎ"];
  var ran1 = Math.floor(Math.random () * RPS1.length);
  var result1 = RPS1[ran1];
  if (ran1 == 0){
    Kakao.send(room,{
  "link_ver": "4.0", 
  "template_id": 34859,
  "template_args": {
    name: sender+"님이 이겼습니다!",
  title8: result1, 
  body8: "",
  img8: "https://i.imgur.com/vIPmgbn.png"}
}, "custom");
  }
  if (ran1 == 1){
    Kakao.send(room,{
  "link_ver": "4.0", 
  "template_id": 34859,
  "template_args": {
    name: sender+"님이 비겼습니다!",
  title8: result1, 
  body8: "",
  img8: "https://i.imgur.com/EjPubNn.png"}
}, "custom");
  }
  if (ran1 == 2){
    Kakao.send(room,{
  "link_ver": "4.0", 
  "template_id": 34859,
  "template_args": {
    name: sender+"님이 졌습니다!",
  title8: result1, 
  body8: "",
  img8: "https://i.imgur.com/gaqxP9V.png"}
}, "custom");
  }
}
if (msg == "셉봇바위"||msg == "셉봇 바위"||msg == "셉봇R"||msg == "셉봇 R"||msg == "셉봇주먹"||msg == "셉봇 주먹"){
    var RPS2 = ["저는 보를 냈는데...\n제가 이겼네요ㅎㅎㅎ","저는 가위를 냈어요!\n져버렸네요...ㅂㄷㅂㄷ","저는 주먹을 냈어요!\n하지만 비겼네요..ㅠ"];
  var ran2 = Math.floor(Math.random () * RPS2.length);
  var result2 = RPS2[ran2];
  if (ran2 == 0){
    Kakao.send(room,{
  "link_ver": "4.0", 
  "template_id": 34859,
  "template_args": {
    name: sender+"님이 졌습니다!",
  title8: result2, 
  body8: "",
  img8: "https://i.imgur.com/vIPmgbn.png"}
}, "custom");
  }
  if (ran2 == 1){
    Kakao.send(room,{
  "link_ver": "4.0", 
  "template_id": 34859,
  "template_args": {
    name: sender+"님이 이겼습니다!",
  title8: result2, 
  body8: "",
  img8: "https://i.imgur.com/EjPubNn.png"}
}, "custom");
  }
  if (ran2 == 2){
    Kakao.send(room,{
  "link_ver": "4.0", 
  "template_id": 34859,
  "template_args": {
    name: sender+"님이 비겼습니다!",
  title8: result2, 
  body8: "",
  img8: "https://i.imgur.com/gaqxP9V.png"}
}, "custom");
  }
}
if (msg == "셉봇 보"||msg == "셉봇보"||msg == "셉봇 보자기"||msg =="셉봇보자기"||msg == "셉봇P"||msg == "셉봇 P"){
    var RPS3 = ["저는 보를 냈는데...\n하지만 비겼네요..ㅠ","저는 가위를 냈어요!\n제가 이겼네요ㅎㅎㅎ","저는 주먹을 냈어요!\n져버렸네요...ㅂㄷㅂㄷ"];
  var ran3 = Math.floor(Math.random () * RPS3.length);
  var result3 = RPS3[ran3];
  if (ran3 == 0){
    Kakao.send(room,{
  "link_ver": "4.0", 
  "template_id": 34859,
  "template_args": {
    name: sender+"님이 비겼습니다!",
  title8: result3, 
  body8: "",
  img8: "https://i.imgur.com/vIPmgbn.png"}
}, "custom");
  }
  if (ran3 == 1){
    Kakao.send(room,{
  "link_ver": "4.0", 
  "template_id": 34859,
  "template_args": {
    name: sender+"님이 졌습니다!",
  title8: result3, 
  body8: "",
  img8: "https://i.imgur.com/EjPubNn.png"}
}, "custom");
  }
  if (ran3 == 2){
    Kakao.send(room,{
  "link_ver": "4.0", 
  "template_id": 34859,
  "template_args": {
    name: sender+"님이 이겼습니다!",
  title8: result3, 
  body8: "",
  img8: "https://i.imgur.com/gaqxP9V.png"}
}, "custom");
  }
}
}catch(e){
  replier.reply(e.message);
  
}
try{
    if (msg == "셉봇운세" || msg == "셉봇 운세" || msg == "셉봇운" || msg == "셉봇 운") {
      var answer = null;
      var MatH = Number(Math.floor(Math.random() * 100) + 1);
      if(MatH > 0 && MatH < 20){
        answer = "운이 안좋으시나봐요!...";
      }
      if(MatH >= 20 && MatH < 50){
        answer = "운이 나쁘진 않네요!";
      }
      if(MatH >= 50 && MatH < 70){
        answer = "운이 좋네요!";
      }
      if(MatH >= 70 && Math<100){
        answer = "운이 너무 좋으시네요!";
      }
      Kakao.send(room,{
  "link_ver": "4.0", 
  "template_id": 34859,
  "template_args": {
    name: sender+"님의 운세!",
  title8: sender + " 님의 운은..." + MatH + "%입니다.",
  body8: answer, 
  img8: "https://i.imgur.com/a0Bf5Fx.png"
  }
}, "custom");
      if (MatH == 100) {
        replier.reply('축하합니다! '+sender+'님 100%네요!\n -Sepbot/Nyunbot-');
      }
    
  }}catch(e){
    replier.reply(e.message);
    
  }
  try{
    if (msg === "셉봇주사위" || msg === "셉봇 주사위") {
    var juSai = Number(Math.floor(Math.random() * 6) + 1);
    Kakao.send(room,{
  "link_ver": "4.0", 
  "template_id": 34960,
  "template_args": {
    name2: juSai+"입니다!",
    title11: sender+"님! "+juSai+"입니다!",
    body: juSai
  }
}, "custom");
  }
  }catch(e){
    replier.reply(e.message);
    
  }
  try{
  if (msg.startsWith("셉봇사진 ")){
    var nsg = msg.substr(5);
    Kakao.send(room,{
  "link_ver": "4.0", 
  "template_id": 34791,
  "template_args": {
    img: nsg
  }
}, "custom"); 
  }
  }catch(e){
    replier.reply(e.message);
    
  }
}}