const boutton = [...document.querySelectorAll('.boutton')]
//Recuperation des cle de tous les boutton en tableau //
const listeCle = boutton.map(e=>e.dataset.cle)
const ecran = document.getElementById('ecran')
const calcul = (valeur) => {
    // on va verifier si le touche appuyer ou clicker est dans la calculatrice 
    if(listeCle.includes(valeur)){
        // on va effacer tout ce qui est a l'ecran quand on click/appuie sur C 
        if(valeur == '8'){
            ecran.textContent = "";
        }
        else if(valeur == '13'){
            ecran.textContent = eval(ecran.textContent)
        }
        else{
            //recuperer le boutton a partir du valeur du cle dans le tableau boutton
            ecran.textContent += boutton[listeCle.indexOf(valeur)].textContent
        }
    }
}
document.addEventListener('click',(e) => {
    const valeurClick = e.target.dataset.cle 
    calcul(valeurClick)
})

document.addEventListener('keydown', (e)=>{
    const valeurKeydown = e.keyCode.toString()
    calcul(valeurKeydown)
    
}) 


