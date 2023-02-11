 //a supprimer pour la luiditer
 try {
    //direction possible du perso
    var murAll;


    //capteur des evenements
    document.addEventListener('keydown', function (event) {
        var e = window.event;
        //document.getElementById('0').
        //text
        console.log(event.code);
        //int
        console.log(e.keyCode);
        console.log(e.keyCode);
        //action de l'utilisateur


        if (e.keyCode == '112') {
            //document.getElementById('fondStart').style.zIndex = 0;
            (function playGame() {
                window.location.href = "Etape1.html"
            }())
        }
        if (e.keyCode == '113') {
            //document.getElementById('fondStart').style.zIndex = 0;
            (function playGame() {
                window.location.href = "Etape2.html"
            }())
        }
        else if (e.keyCode == '13') {
            document.getElementById('finAffichage').style.display = "on";
            document.getElementById('fondStart').style.zIndex = 0;
        }
    })
}
catch (e) {
    console.log(e)
}

//si on tap le mur on pert de la vie
//graphisme dk
//tuto
//menu
//??saut de la graviter