window.onload=function(){
        var all = document.getElementsByClassName('klang');
        for(var i = 0; i < all.length; i++) { 
            all[i].childNodes[0].setAttribute('onClick', 'playTheShit(' + i + ')'); 

            all[i].childNodes[0].className += " taster";
            all[i].childNodes[2].style.display = 'none'; 
        }
}

function playTheShit(id)
{
    document.getElementsByClassName("klang")[id].childNodes[2].play();
}
