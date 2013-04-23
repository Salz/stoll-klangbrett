window.onload=function(){
        var all = document.getElementsByClassName('klang');
        for(var i = 0; i < all.length; i++) { 
            all[i].childNodes[1].setAttribute('onClick', 'playTheShit(' + i + ')'); 

            all[i].childNodes[1].className += " taster";
            all[i].childNodes[3].style.display = 'none'; 
        }
        var hash=document.location.hash.substr(1);
        if(typeof hashes !== 'undefined' && hashes.length > 1) {
		var els=document.getElementsByTagName('h2');
		var hashlist=hashes.split(',');
		var duration=0;
		for(var chash in hashlist){
			var hash=hashlist[chash];
			for(var i in els) {
				var name = els[i].innerHTML +'';
				if((name.replace(/ /g, '').toLowerCase()).indexOf(hash) !== -1){
					setTimeout(function(i){playTheShit(i);},duration*1000,i);
					duration+=getAudioById(i).duration;;	
					break;
				}
			}
		}
	}

}

function playTheShit(id)
{
    document.getElementsByClassName("klang")[id].childNodes[3].play();
}
