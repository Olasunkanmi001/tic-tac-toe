var arr = ["x",'o',"x","o","x","o","x","o","x"]
var zer = 0
function you(event){
    event.srcElement.innerHTML= arr [zer ++]
    var box1= document.getElementById("box1").innerHTML
    var box2= document.getElementById("box2").innerHTML
    var box3= document.getElementById("box3").innerHTML
    var box4= document.getElementById("box4").innerHTML
    var box5= document.getElementById("box5").innerHTML
    var box6= document.getElementById("box6").innerHTML
    var box7= document.getElementById("box7").innerHTML
    var box8= document.getElementById("box8").innerHTML
    var box9= document.getElementById("box9").innerHTML
    if (document.getElementById("box1").innerHTML=="x" && document.getElementById("box2").innerHTML=="x" && document.getElementById("box3").innerHTML=="x"){
        alert("player x won")
        window.location.href = "website.html"
        }
        if (document.getElementById("box1").innerHTML=="o" && document.getElementById("box2").innerHTML=="o" && document.getElementById("box3").innerHTML=="o" ){
            alert("player o won")
            window.location.href="website.html"
    }
    if (document.getElementById("box4").innerHTML=="x"&& document.getElementById("box5").innerHTML=="x"&& document.getElementById("box6").innerHTML=="x"){
        alert("player x won") 
        window.location.href="website.html"
    }
    if (document.getElementById("box4").innerHTML=="o" && document.getElementById("box5").innerHTML=="o" && document.getElementById("box6").innerHTML=="o"){
        alert("player o won")
        window.location.href="website.html"
    }
    if (document.getElementById("box7").innerHTML=="x"&& document.getElementById("box8").innerHTML=="x"&& document.getElementById("box9").innerHTML=="x"){
        alert("player x won")
        window.location.href="website.html"
    }
    if (document.getElementById("box7").innerHTML=="o"&& document.getElementById("box8").innerHTML=="o"&& document.getElementById("box9").innerHTML=="o"){
        alert("player o won")
        window.location.href="website.html"
    }
    if (document.getElementById("box1").innerHTML == "x" && document.getElementById("box5").innerHTML == "x" && document.getElementById("box9").innerHTML == "x"){
        alert("player x won")
        window.location.href="website.html"
    }
    if (document.getElementById("box1").innerHTML == "o" && document.getElementById("box5").innerHTML == "o" && document.getElementById("box9").innerHTML == "o"){
        alert("player o won")
        window.location.href="website.html"
    }
    if (document.getElementById("box7").innerHTML == "x" && document.getElementById("box5").innerHTML == "x" && document.getElementById("box3").innerHTML == "x"){
        alert("player x won")
        window.location.href="website.html"
    }
    if (document.getElementById("box7").innerHTML == "o" && document.getElementById("box5").innerHTML == "o" && document.getElementById("box3").innerHTML == "o"){
        alert("player o won")
        window.location.href="website.html"
    }
  



  


}

