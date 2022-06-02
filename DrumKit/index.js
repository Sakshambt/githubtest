// document.querySelector(".set").addEventListener("click", clicked);

// function clicked(){
    
//     var audio1 = new Audio('sounds/tom-1.mp3');
//     audio1.play();
// }


var numberOfDrums = document.querySelectorAll(".drum").length;
for ( var i = 0; i < numberOfDrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("pointerdown", function(){
        //this.style.color = "white";
    });
    document.querySelectorAll(".drum")[i].addEventListener("pointerup", function(){
        this.style.color = "#DA0463";
        this.style.textshadow = "3px 0 #DBEDF3";
    });

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //this.style.color = "white";
        checkCase(this.innerHTML);
        buttonAnimation(this.innerHTML);
            
           
    });
}

document.addEventListener("keydown", function(event){;
    var keyType = event.key;
    checkCase(keyType);
    //document.querySelector("."+keyType).style.color = "white";
    buttonAnimation(keyType);
    
});

document.addEventListener("keyup", function(event){;
    var keyType = event.key;
    document.querySelector("."+keyType).style.color = "#DA0463";
    document.querySelector("."+keyType).style.textshadow = "3px 0 #DBEDF3";
    
});


function checkCase(charact){
    switch(charact){

        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
            
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;
            
        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;


        case "k":
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
        break;

        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;

        default:
            alert("Might have to press another key.")
        break;

    }
}

function buttonAnimation(currentKey){
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    }, 100);
}