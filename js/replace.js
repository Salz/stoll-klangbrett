window.onload=function(){
        var all = document.getElementsByClassName('klang');
        for(var i = 0; i < all.length; i++) { 
            all[i].childNodes[0].setAttribute('onClick', 'playTheShit(' + i + ')'); 

            all[i].childNodes[0].className += " taster";
            all[i].childNodes[2].style.display = 'none'; 
        }
        var hash=document.location.hash.substr(1);
        if(typeof hash !== 'undefined' && hash.length > 1) {
                var els=document.getElementsByTagName('h2');
                for(var i in els) {
                        var name = els[i].innerHTML +'';
                        if((name.replace(' ', '').toLowerCase()).indexOf(hash) !== -1){
                                playTheShit(i);
                                break;
                        }
                }

        }

}

function playTheShit(id)
{
    document.getElementsByClassName("klang")[id].childNodes[2].play();
}
