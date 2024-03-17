var randomnum1 = Math.floor(Math.random()*6)+1; //0-6
var randomImg = "dice" + randomnum1 + ".png";
var image1src = "" + randomImg;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute('src', image1src);

var randomnum2 = Math.floor(Math.random()*6)+1; //0-6
var randomImg = "dice" + randomnum2 + ".png";
var image2src = "" + randomImg;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute('src', image2src);

if(randomnum1>randomnum2){
  document.querySelector('h1').innerHTML="Player 1 won";
}
else if(randomnum1<randomnum2){
  document.querySelector('h1').innerHTML="Player 2 won";
}
else{
    document.querySelector('h1').innerHTML="Draw!1";
}
