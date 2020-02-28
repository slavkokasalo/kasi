document.body.style.fontSize="1.5rem";
var slika = document.getElementsByTagName("img");
for (var i =0; i < slika.length; i++){
slika[i].height="300"

}

var tekst = document.getElementById("slavko");
console.log(tekst);
slavko.innerHTML ="Domaće životinje su one životinje koje čovjek pripitomljava i uzgaja radi koristi i razonode, a koje i same imaju koristi od takve trajne zajednice sa čovjekom jer su zaštićene u borbi za opstanak. Da bi se neka životinja smatrala domaćom, potrebno je ispuniti tri uvjeta. Prvi je uvjet da životinja posjeduje osobine koje su čovjeku korisne, drugi da je privržena i poslušna čovjeku i treći da se jedinke redovito razmnožavaju pod čovjekovim nadzorom";

var tekst = document.getElementById("david");
console.log(tekst);
david.innerHTML ="Magarac kakvog danas poznamo potječe od divljih predaka iz Afrike, nubijskog i somalijskog divljeg magarca. Nubijski divlji   magarac potječe s područja Sjeverne Afrike (današnje Eritreje), a somalijski divlji magarac s juga Eritreje i sjeverne Somalije. Magarac je udomaćen prije osam tisuća godina. U trećem tisućljeću pr.Kr. magarci se šire Azijom, a ratovi i trgovina, posebno ‹›put svile››, dovode magarce i na područje Europe, najvjerovatnije prije tri do četiri tisuće godina prije kris" ;

var tekst = document.getElementById("sani");
console.log(tekst);
sani.innerHTML="Domaćim govedom, često jednostavno samo govedom, nazivaju se domesticirani potomci divljeg goveda (Bos taurus). Domesticiranje je počelo prvo radi mesa, a kasnije radi mlijeka i njihove snage korištene za vuču.";

function imgOver (id) {
    document.getElementById(id).src="images/krava.jpg";
}
function imgOut (id) {
    document.getElementById(id).src="images/krava2.jpg";
}


var audio = new Audio("zvukkonja.mp3" ) ;

document.getElementById("jaopet").onclick = function() {change_text()};
function change_text() {
    document.getElementById("jaopet").innerHTML = "Domaći konj (konj, lat. Equus (Equus) caballus; sin. Equus ferus caballus, Equus caballus caballus, Equus caballus) je veliki četveronožni sisavac, pripadnik roda Equus. Konji su odavno bili jedna od najvažnijih domaćih životinja koja se uzgaja u vrlo velikom broju raznih pasmina, a živi širom svijeta.";
}

 var libButton = document.getElementById('lib-button');
        var libIt = function() {
            var storyDiv = document.getElementById("story");
            storyDiv.innerHTML = "tocno!";
           
        };

        libButton.addEventListener('click', libIt);
        var libIt = function() {
var storyDiv = document.getElementById("story");
var Name = document.getElementById('person').value;
storyDiv.innerHTML =("i dont know"+ noun + "what the hell" + adjective + "im doing" + person);
};
libButton.addEventListener('click', libIt);

var tekst = document.getElementById("jaja");
console.log(tekst);
jaja.innerHTML="Domaćim govedom, često jednostavno samo govedom, nazivaju se domesticirani potomci divljeg goveda (Bos taurus). Domesticiranje je počelo prvo radi mesa, a kasnije radi mlijeka i njihove snage korištene za vuču.";

