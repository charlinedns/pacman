document.addEventListener("DOMContentLoaded", function () {                             //A besoin de deux arguments 1:fichier chargé
    //Début du code JavaScript
   /* function pacman() {       */                                                           //Créer la fonction
        var pac = document.getElementById('pacman');                                     //Aller chercher id pacman dans html
        var posX = pac.offsetLeft;                                                            //Créer une variable sur axe des X pour détecter sa position gauche
        var posY = pac.offsetTop;
        var audio = new Audio('0477.wav');
        console.log(posX);
        console.log(posY);
        /* document.addEventListener("keydown", function (event) {                                   //Détecter le keyup de l'utilisateur
            console.log(event.keyCode);
            switch (event.keyCode) {                                                            //Déclarer une condition
                case 68:                                                                        //Déclarer le keycode utilisé
                    console.log("droite");
                    if (posX >=900) {                                                          //Introduire une condition if/else pour détecter les bords
                        audio.play()
                    }
                    else {//posX= posX +20;
                        posX += 20;
                        pac.style.left = posX + "px";
                    }
                    break;

                case 81:                                                                        //Déclarer nouveau Keycode
                    console.log('gauche');
                    if (posX === 0) {  
                        audio.play()                                                       
                    }
                    else {
                        posX -= 20;                                                             //déclarer sa nouvelle position !!! avec - et toujours sur X
                        pac.style.left = posX + "px";
                    }
                    break;

                case 83:
                    console.log("bas");
                    if (posY <= 380) {
                        posY += 20;
                        pac.style.top = posY + "px";
                    } else {
                        audio.play()  
                    }
                    break;

                case 90:
                    console.log("haut");
                    if (posY === 0) {
                        audio.play()  
                    } else {
                        posY -= 20;
                        pac.style.top = posY + "px";
                    }
                    break;

                default:
                    break;

            }
            event.keycode                                                                   //Détecter 
            console.log(event);
        })

    }
    pacman(); */

        //Utilisation Hammer JS

        var pacTactile = document.getElementById('game');
        var mc = new Hammer(pacTactile);
        var deplacement= 2;                                                 //Gestion vitesse de déplacement
        mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

        mc.on("panleft panright panup pandown", function (ev) {
            switch (ev.type) {                                                            
                case "panright":                                                                      
                    console.log("droite");
                    if (posX >= 900) {                                                          
                        //audio.play()
                    }
                    else {//posX= posX +20;
                        posX += deplacement;
                        pac.style.left = posX + "px";
                    }
                    break;

                case "panleft":                                                                      
                    console.log('gauche');
                    if (posX === 0) {
                        //audio.play()                                                       
                    }
                    else {
                        posX -= deplacement;                                                            
                        pac.style.left = posX + "px";
                    }
                    break;

                case "pandown":
                    console.log("bas");
                    if (posY <= 380) {
                        posY += deplacement;
                        pac.style.top = posY + "px";
                    } else {
                        // audio.play()  
                    }
                    break;

                case "panup":
                    console.log("haut");
                    if (posY === 0) {
                        //audio.play()  
                    } else {
                        posY -= deplacement;
                        pac.style.top = posY + "px";
                    }
                    break;

                default:
                    break;

            }




        });


    //Fin du code JavaScript
});


//Z+ 90    S+83         q=81        D=68
// haut: 38   bas:40    gauche:37    droite:39