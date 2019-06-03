window.onload=function(){
var btnBack = document.getElementById('rain');
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

    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window. innerHeight;
    var context = canvas.getContext("2d");
    var img = new Image ();
    img.src = "NyanCat.png";
    var NoOfCats = 20;
    var Cats = [];
    for (var i=0; i<NoOfCats; i++) {
      var x = Math.floor (Math.random()* canvas.width);
      var y = Math.floor (Math.random()* canvas.height);
      heart [i] = new Cats (x,y);
    }


      function Cats (x,y){
        this.x = x;
        this.y = y;

        this.show = function() {
        context.drawImage(img,this.x, this.y, 10,10);
        }
      }


      function draw() {
      context.fillStyle = "";
      context.fillRect (0,0,canvas.width, canvas.height);
      for (var i=0; i<NoOfCats;i++)
    }
      Cat[i].show ();
    }
  }

      function update () {
        draw();
        window.requestAnimationFrame(update);
      }

      update ();
