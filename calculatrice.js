
function addition(nombreA, nombreB) {
    return nombreA + nombreB;
}

function mutiplication(nombreA, nombreB) {
    return nombreA * nombreB;
}
function soustaction(nombreA, nombreB) {
    return nombreA - nombreB;
}
function division(nombreA, nombreB) {
    if(nombreB ==0){
        throw new Error('Oups! Impossible de diviser un nombre par 0')
    }
    return nombreA / nombreB;
}

do {
    var choix = Number(prompt("Que souhaitez vous faire ? \n \n 1 - Addition \n 2 - Multiplication \n 3 - Soustraction \n 4 - Division\n ")); 
    
} while (choix !=1 && choix !=2 && choix !=3 && choix !=4);


do {
    var premierNombre = Number(prompt('Entrer votre premier nombre :'));
    var deuxiemeNombre = Number(prompt('Entrer votre deuxieme nombre :'));
} while (isNaN(premierNombre) || isNaN(deuxiemeNombre));



try {
    switch (choix) {
        case 1:
            var resultat = addition(premierNombre,deuxiemeNombre)
            break;
        case 2:
            var resultat = mutiplication(premierNombre,deuxiemeNombre);
            break;
        case 3:
            var resultat = soustaction(premierNombre,deuxiemeNombre);
            break;
            
        case 4:
            var resultat = division(premierNombre, deuxiemeNombre);
            break;
        default:
            throw new Error('Une erreur est survenu');

        
    }
    alert('Voici le resultat : ' + resultat);
} catch (error) {
    alert(error);
}
