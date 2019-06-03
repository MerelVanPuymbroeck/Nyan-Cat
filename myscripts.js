window.onload=function(){
var btnBack = document.getElementById('button');
btnBack.addEventListener('click',function() {
    document.body.classList.toggle('BgClass');
});
}

function settime(){
	var audio= document.getElementById("myaudio");
	audio.currentTime=38;
	audio.play();
	console.log(audio.currentTime);
	setInterval(function(){
		if(audio.currentTime>45){
			audio.pause();
				}
			},1000);
		}

    var button = document.getElementById("button");
           var c = document.getElementById("canvas");
           var ctx = c.getContext("2d");
           canvas.width = window.innerWidth;
           canvas.height = window.innerHeight;
           var RandomNumberOfNyanCats = getRandomInt(50);
           var NumberOfNyanCats = RandomNumberOfNyanCats;
           var NyanCats = [];
           var img = new Image;
           var x = 0;
           var y = 0;
           function getRandomInt(max) {
               return Math.floor(Math.random() * Math.floor(max));
           }
           img.src = "NyanCat.png";
           for (let i = 0; i < NumberOfNyanCats; i++) {
               NyanCats[i] = new NyanCat(randomx, y);
               var randomx = getRandomInt(canvas.width);
           }
           function NyanCat(x, y) {
               this.x = x;
               this.y = y;
               this.show = function() {
                   ctx.drawImage(img, this.x, this.y, 150, 125);
               }
               this.fall = function(speed) {
                   this.speed = speed;
                   this.y += this.speed;
                   this.x += this.speed;
                   if (this.y > canvas.height || this.x > canvas.width) {
                       this.y = 0;
                       var randomx = getRandomInt(canvas.width);
                       this.x = randomx;
                   }
               }
           }
           function draw() {
               var background = new Image();
               background.src = "Achtergrond2.png";
               background.onload = function() {
                   ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
               }
               for (let i = 0; i < NumberOfNyanCats; i++) {
                   NyanCats[i].show();
                   speed = getRandomInt(5);
                   NyanCats[i].fall(speed);
               }
           }
           function update() {
               draw();
               window.requestAnimationFrame(update);
           }
           function clearrect() {
               button.style.display = 'block';
               canvas.style.display = 'none';
           }
