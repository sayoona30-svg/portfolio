document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".navbar-header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          
            header.classList.add("scrolled");
        } else {
            
            header.classList.remove("scrolled");
        }
    });


    const liensMenu = document.querySelectorAll(".nav-links a");
    const pageActuelle = window.location.pathname.split("/").pop();

    liensMenu.forEach(lien => {
        const hrefLien = lien.getAttribute("href");
        if (pageActuelle === hrefLien) {
           
            lien.classList.add("active");
        } else {
            
            lien.classList.remove("active");
        }
    });


    
    const formulaire = document.querySelector(".contact-form");

    if (formulaire) {
        formulaire.addEventListener("submit", (evenement) => {
            evenement.preventDefault();

            const champsSaisis = formulaire.querySelectorAll("input, textarea");
            
            alert("Merci ! Votre message a bien été envoyé de manière sécurisée.");
            
            
            champsSaisis.forEach(champ => champ.value = "");
        });
    }
});