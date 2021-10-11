const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crane
var tower
var brick
var picking_up_animation

function preload() {
  loadImage("https:www.bing.com/images/search?view=detailV2&ccid=tEqvaJ66&id=6F143859C60D0247D910C9BD0A4D58AAB7536B71&thid=OIP.tEqvaJ66hQydtb3nmB-MRAHaHa&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.b44aaf689eba850c9db5bde7981f8c44%3frik%3dcWtTt6pYTQq9yQ%26riu%3dhttp%253a%252f%252fgetdrawings.com%252fcliparts%252fconstruction-crane-clipart-4.jpg%26ehk%3dQPrlGhF237%252f5otCXNSFpF4Hu2tobskr87KvIwaHjw0Q%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1000&expw=1000&q=crane+clipart&simid=608017582285471819&FORM=IRPRST&ck=51CC213DF60B6D2F74FE1329B62BE867&selectedIndex=9&ajaxhist=0&ajaxserp=0") = crane
  loadImage("https://www.bing.com/images/search?view=detailV2&ccid=iRGU3X64&id=05305643E3EE3A886194EEAAA57D0CFCB41CC530&thid=OIP.iRGU3X64zJ7-IxKO6718tAHaDE&mediaurl=https%3a%2f%2fwebstockreview.net%2fimages%2fbrick-clipart-one-brick-7.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.891194dd7eb8cc9efe23128eebbd7cb4%3frik%3dMMUctPwMfaWq7g%26pid%3dImgRaw%26r%3d0&exph=381&expw=920&q=brick+clipart&simid=608007012371805353&FORM=IRPRST&ck=8F322D566F11028783FB21E8EA545E69&selectedIndex=23&ajaxhist=0&ajaxserp=0") = brick
  loadImage("https://www.bing.com/images/search?view=detailV2&ccid=oHjyYHcH&id=D5971E84ADE40898BC6D7CA7168E8DEAD69EB639&thid=OIP.oHjyYHcH6a5A2aoyCjxWdgAAAA&mediaurl=https%3a%2f%2fclipartstation.com%2fwp-content%2fuploads%2f2018%2f09%2fbuilding-foundation-clipart-2.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.a078f2607707e9ae40d9aa320a3c5676%3frik%3dObae1uqNjhanfA%26pid%3dImgRaw%26r%3d0&exph=338&expw=450&q=unfinished+brick+tower+clip+art&simid=607990785994924103&FORM=IRPRST&ck=6446E8E809CAB012878B821DE47B35D5&selectedIndex=1&ajaxhist=0&ajaxserp=0") = tower
  loadAnimation("https://www.bing.com/images/search?view=detailV2&ccid=vy5DeCSX&id=2CA2B73475D8B08F9972CF7C262B2C29DD9E66F7&thid=OIP.vy5DeCSXk1FXvOwyuN2rAwHaHa&mediaurl=https%3a%2f%2f31.media.tumblr.com%2f9d9e8a0ef11ad2ec7cf0f7f6946f9aff%2ftumblr_na58m0yjfN1rn9vmdo1_500.gif&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.bf2e43782497935157bcec32b8ddab03%3frik%3d92ae3SksKyZ8zw%26pid%3dImgRaw%26r%3d0&exph=500&expw=500&q=crane+lifting+brick+gif&simid=608050348595229532&FORM=IRPRST&ck=2EA98F76DCF6F302F53A7B4B29E3CEC1&selectedIndex=1&ajaxhist=0&ajaxserp=0") = picking_up_animation
}

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  framerate=80
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
}

