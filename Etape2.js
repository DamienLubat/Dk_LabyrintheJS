run()
async function run() {
    //direction possible du perso
    var murAll;
    
    //capteur des evenements
    document.addEventListener('keydown', async function (event) {
        var e = window.event;
        //document.getElementById('0').
        //text
        console.log(event.code);
        //int
        console.log(e.keyCode);
        console.log(e.keyCode);
        
        
        
        //action de l'utilisateur
        if (e.keyCode == '38') {
            let depArrow = await deplacementArrow();
            // up arrow(clavier)
            let posDKtop = parseInt(document.getElementById('dk').style.marginTop.replace('px', ''), 10);
            let posDKleft = parseInt(document.getElementById('dk').style.marginLeft.replace('px', ''), 10);
            let marginTopFond = parseInt(document.getElementById('fond').style.marginTop.replace('px', ''), 10);
            let clientHeightFond = parseInt(document.getElementById('fond').clientHeight, 10);

            var direction = true;
            var index;

            if (posDKtop > marginTopFond && clientHeightFond + marginTopFond > posDKtop) {
                for (let i = 0; i <= 42; i++) {

                    if (document.getElementById('mur' + i + '').style.marginLeft == posDKleft + 'px' && document.getElementById('mur' + i + '').style.marginTop == posDKtop - 50 + 'px') {
                        index = i;
                        direction = false;

                        //querySelectorAll

                        break;
                    }
                }

                if (direction == true) {

                    posDKtop = posDKtop - 50;

                    //afficher
                    document.getElementById('dk').src = "./img/dk_haut.png"
                    document.getElementById('dk').style.marginTop = posDKtop + "px";
                    document.getElementById('dk').style.marginLeft = posDKleft + "px";

                    //hidden
                    //document.getElementById('dk').style.marginTop = posDKtop + "px";
                }
            }
        }
        else if (e.keyCode == '40') {
            let depArrow = await deplacementArrow();
            // down arrow(clavier)
            let posDKtop = parseInt(document.getElementById('dk').style.marginTop.replace('px', ''), 10);
            let posDKleft = parseInt(document.getElementById('dk').style.marginLeft.replace('px', ''), 10);
            let widthDK = parseInt(document.getElementById('dk').style.width.replace('px', ''), 10);
            let marginTopFond = parseInt(document.getElementById('fond').style.marginTop.replace('px', ''), 10);
            let clientHeightFond = parseInt(document.getElementById('fond').clientHeight, 10);

            var direction = true;
            var index;

            if (posDKtop >= marginTopFond && clientHeightFond + marginTopFond - widthDK > posDKtop) {
                for (let i = 0; i <= 42; i++) {

                    if (document.getElementById('mur' + i + '').style.marginLeft == posDKleft + 'px' && document.getElementById('mur' + i + '').style.marginTop == posDKtop + 50 + 'px') {
                        index = i;
                        direction = false;

                        //querySelectorAll

                        break;
                    }
                }

                if (direction == true) {

                    posDKtop = posDKtop + 50;

                    //afficher
                    document.getElementById('dk').src = "./img/dk_bas.png"
                    document.getElementById('dk').style.marginTop = posDKtop + "px";
                    document.getElementById('dk').style.marginLeft = posDKleft + "px";

                    //hidden
                    //document.getElementById('dk').style.marginTop = posDKtop + "px";
                }
            }
        }
        else if (e.keyCode == '37') {
            let depArrow = await deplacementArrow();
            // left arrow(clavier)
            let posDKtop = parseInt(document.getElementById('dk').style.marginTop.replace('px', ''), 10);
            let posDKleft = parseInt(document.getElementById('dk').style.marginLeft.replace('px', ''), 10);
            let marginLeftFond = parseInt(document.getElementById('fond').style.marginLeft.replace('px', ''), 10);
            let clientWidthFond = parseInt(document.getElementById('fond').clientWidth, 10);

            var direction = true;
            var index;

            if (posDKleft > marginLeftFond && clientWidthFond + marginLeftFond >= posDKleft) {
                for (let i = 0; i <= 42; i++) {

                    if (document.getElementById('mur' + i + '').style.marginLeft == posDKleft - 50 + 'px' && document.getElementById('mur' + i + '').style.marginTop == posDKtop + 'px') {
                        index = i;
                        direction = false

                        //querySelectorAll

                        break;
                    }
                }
                if (direction == true) {
                    //deplacement
                    posDKleft = posDKleft - 50;

                    //afficher
                    document.getElementById('dk').src = "./img/dk_gauche.png"
                    document.getElementById('dk').style.marginLeft = posDKleft + "px";
                    document.getElementById('dk').style.marginTop = posDKtop + "px";


                    //hidden
                    //document.getElementById('dk').style.marginLeft = posDKleft + "px";
                }
            }
        }

        else if (e.keyCode == '39') {
            let depArrow = await deplacementArrow();
            // right arrow(clavier)
            let posDKtop = parseInt(document.getElementById('dk').style.marginTop.replace('px', ''), 10);
            let posDKleft = parseInt(document.getElementById('dk').style.marginLeft.replace('px', ''), 10);
            let widthDK = parseInt(document.getElementById('dk').style.width.replace('px', ''), 10);
            let marginLeftFond = parseInt(document.getElementById('fond').style.marginLeft.replace('px', ''), 10);
            let clientWidthFond = parseInt(document.getElementById('fond').clientWidth, 10);

            var direction = true;
            var index;

            //Test du mur
            if (posDKleft >= marginLeftFond && clientWidthFond + marginLeftFond - widthDK > posDKleft) {
                for (let i = 0; i <= 42; i++) {


                    if (document.getElementById('mur' + i + '').style.marginLeft == posDKleft + 50 + 'px' && document.getElementById('mur' + i + '').style.marginTop == posDKtop + 'px') {
                        index = i;
                        direction = false

                        //querySelectorAll

                        break;
                    }
                }

                if (direction == true) {
                    //deplacement
                    posDKleft = posDKleft + 50;

                    //afficher
                    document.getElementById('dk').src = "./img/dk_droite.png"
                    document.getElementById('dk').style.marginLeft = posDKleft + "px";
                    document.getElementById('dk').style.marginTop = posDKtop + "px";

                    //hidden
                    //document.getElementById('dk').style.marginLeft = posDKleft + "px";

                    //Animation fin
                    if (document.getElementById('fin').style.marginLeft == posDKleft + 'px' && document.getElementById('fin').style.marginTop == posDKtop + 'px') {
                        let fin;
                        let sonFinDK = sonFin.innerHTML;
                        
                        document.getElementById('finAffichage').style.display = "";
                        document.getElementById('finAffichage').style.zIndex = 4;
                        fin = document.getElementsByClassName('stage1')[0];
                        //fin.remove();

                        //Audio fin
                        sonFinDK = `<audio src="./img/Final.wav" id="sonFin" style="display:none" controls autoplay ></audio>`;
                        sonFin.innerHTML = sonFinDK;
                        document.getElementById('sonFin').play();
                        setTimeout(document.getElementById('sonFin').pause(), 4000);

                    }
                }
            }
        }

        else if (e.keyCode == '112') {
            document.getElementById('fondStart').style.zIndex = 0;
        }

        else if (e.keyCode == '13') {
            location.href = "index.html"
        }
    })

}; 
async function deplacementArrow() {
    var posDKtop = await parseInt(document.getElementById('dk').style.marginTop.replace('px', ''), 10);
    var posDKleft = await parseInt(document.getElementById('dk').style.marginLeft.replace('px', ''), 10);
    var posARROWtop = 250;
    var posARROWleft = parseInt(document.getElementById('arrow').style.marginLeft.replace('px', ''), 10);
    var marginLeftFond = 475;
    var fin = false;
    
    for(var p = 775; p>475; p=p-50){
        document.getElementById('arrow').style.zIndex = 4;
        
            posARROWleft = posARROWleft - 50;
            document.getElementById('arrow').style.marginLeft = posARROWleft + "px";
            return new Promise(resolve => setTimeout(resolve, 2000)); // attendre 2 secondes avant de continuer
        //if(posARROWleft == 475){ fin = true; } else { fin = false;}
        
    }
  
    document.getElementById('arrow').style.zIndex = 0;
    document.getElementById('arrow').style.marginLeft = '775px';
  
    if (posDKleft == posARROWleft && posDKtop == posARROWtop) {
      location.reload(); 
    }
}