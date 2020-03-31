<div id='aller'>
<script src='https://cdn.statically.io/gh/yehia-hacker/yehia.online/6cfb4155/javascript/story.min.js'></script>

<style>
@import 'https://cdn.statically.io/gh/yehia-hacker/yehia.online/e3639575/Css/Story.min.css';

#storiesa {padding: 12px;
position: absolute;
top: 120px;
left: 440px;
(max-width: 640px)
(max-width: 800px)
(max-width: 1024px)
(max-width: 1280px)
}
.disclaimer {display:block;text-decoration: none !important;color:#333;line-height: 1.5em;background: #ffffd2;border-radius:3px;margin: 12px 12px 0;padding:12px 12px 12px 74px;font-size:13px;max-width: 500px;overflow: hidden;min-height: 50px;
padding-top: -300px;
}
.disclaimer img {float:left;margin-right: 12px;width:50px;position: absolute;margin-left:-62px;
padding-top: -300px;
}
.disclaimer a {color: inherit !important;border:0;}
.disclaimer p {margin: 0;}
.disclaimer p + p {margin-top: 1.25em}
.skin {text-transform: uppercase;white-space: nowrap;overflow: hidden;font-weight: bold;position: absolute;z-index: 10;left:0;right:0;bottom: 0;background: #fff;font-size:16px;padding:12px;color:#fff;background:#333;}
.skin select {background: #fff; font-size:inherit;text-transform: none; max-width: 30%;}
#storiesa {max-width: 500px;margin:0 auto;
padding-top: -300px;
}
@media (min-width: 524px){
.disclaimer {margin: 12px auto;
padding-top: -300px;
}
}
strong {font-weight:500;
padding-top: -300px;
}
</style>


<div id="stories"></div>
<script id="rendered-js">
var initDemo = function () {
var skin = location.href.split('skin=')[1];
if (!skin) {
skin = 'Snapgram';
}
var skins = {
'Snapgram': {
'avatars': true,
'list': false,
'autoFullScreen': false,
'cubeEffect': true },
'VemDeZAP': {
'avatars': false,
'list': true,
'autoFullScreen': false,
'cubeEffect': false },
'FaceSnap': {
'avatars': true,
'list': false,
'autoFullScreen': true,
'cubeEffect': false },
'Snapssenger': {
'avatars': false,
'list': false,
'autoFullScreen': false,
'cubeEffect': false } };
var timeIndex = 0;


var shifts = [
5000,

//======5*0.9,
//======10*0.9,
//======15*0.9,// ----15 MinuTes-------
//======20*0.9,// ------20 MinuTes------------
//======25*0.9,//------ 25 MinuTes------
//======30*0.9,//------ 30 MinuTes------
//======35*0.9,// ------35 MinuTes------
//======40*0.9,// ------40 MinuTes------
//======45*0.9,//------ 45 MinuTes------
//======50*0.9,//------ 50 MinuTes------
//======55*0.9,
//======60*0.9,//------60 MinuTes------

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

//======1*50,//------ 1Hour------
//======2*50,// ------2H------
//======3*50,//------ 3H------
//======
4*50,
// ------4H------
//======5*50,// ------5H------
//======6*50,// ------6H------
//======7*50,//------ 7H------
//======8*50,// ------8H------
//======9*50,// ------9H------
//======
10*50,
// ------10H------
//======11*50,// ------11H------
//======12*50,// ------12H------
//======13*50,//------ 13H------
//======14*50,// ------14H------
//======15*50,//------ 15H------
//======16*50,// ------16H------
//======17*50,//------ 17H------
//======18*50,//------ 18H------
//======19*50,// ------19H------
//======20*50,// ------20H------
//======21*50,// ------21H------
//======22*50,//------ 22H------
//======23*50,// 23H------------
//======24*50//------ 24H------


/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

//======
1*1200 
//------1DaY------
//======2*1200 //------2DaY------
//======3*1200 //------3DaY------
//======4*1200 //------4DaY------
//======5*1200 //------5DaY------
//======6*1200 //------6DAY------







];
var timestamp = function () {
var now = new Date();
var shift = shifts[timeIndex++] || 0;
var date = new Date(now - shift * 72000);
return date.getTime() / 1000;
};
var stories = new Zuck('stories', {
autoFullScreen: skins[skin]['autoFullScreen'],
avatars: skins[skin]['avatars'],
localStorage: true,
stories: [
{
id: "yehia.online",
photo: "https://cdn.statically.io/gh/yehia-hacker/yehia.online/db74eaa4/images/Yehia_Logo.jpg",
name: " ",
link: "https://www.yehia.online/",
lastUpdated: timestamp(),
items: [
Zuck.buildItem("yehia", "photo", 2, "https://cdn.statically.io/gh/yehia-hacker/yehia.online/1bf1988a/Story/SpyerCuppon.png", "", 'https://www.yehia.online/p/spyer.html', 'زياره الرابط', false, timestamp()),
Zuck.buildItem("yehia", "photo", 2, "https://cdn.statically.io/gh/yehia-hacker/yehia.online/108fa919/Story/python-list.png", "ssssss", 'https://www.yehia.online/search/label/%D9%85%D9%83%D8%AA%D8%A8%D8%A7%D8%AA-%D8%A8%D8%A7%D9%8A%D8%AB%D9%88%D9%86', 'زياره الرابط', false, timestamp()),
Zuck.buildItem("yehia", "video", 2, "https://cdn.statically.io/gh/yehia-hacker/yehia.online/db74eaa4/Story/python-intro.mp4",  'https://www.yehia.online/search/label/%D8%A3%D9%83%D9%88%D8%A7%D8%AF-%D8%A8%D8%A7%D9%8A%D8%AB%D9%88%D9%86-%D8%AC%D8%A7%D9%87%D8%B2-%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9',false,false, false, timestamp()),

] },
] });
var el = document.querySelectorAll('#skin option');
var total = el.length;
for (var i = 0; i < total; i++) {if (window.CP.shouldStopExecution(0)) break;
var what = skin == el[i].value ? true : false;
if (what) {
el[i].setAttribute('selected', what);
header.innerHTML = skin;
header.className = skin;
} else {
el[i].removeAttribute('selected');
}
}window.CP.exitedLoop(0);
};
initDemo();
</script>
</div>
