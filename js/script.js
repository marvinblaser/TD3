let thumbsUp = document.querySelector(".accueil h1 span");

thumbsUp.addEventListener("click", ()=>{
    console.log("salut");
})

document.addEventListener("keydown", keyPress)
function keyPress(event){
    let key = event.key
    console.log(key)
}

const barres = document.querySelectorAll(".barres div div");

// Ajoutez un gestionnaire d'événements 'click' à chaque élément div
barres.forEach(barre => {
    barre.addEventListener('click', heightChanger);
});

// Définissez la fonction heightChanger
function heightChanger() {
    // Générez une hauteur aléatoire entre 0 et 100 pour chaque élément div
    const randomHeight = Math.random() * 100;
    
    // Appliquez la nouvelle hauteur à l'élément cliqué
    this.style.height = randomHeight + "%";
}

document.addEventListener("click", (e)=>{
    e.target.remove()
})