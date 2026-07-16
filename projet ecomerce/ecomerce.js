document.addEventListener("DOMContentLoaded", () => {
    
   

    document.getElementById("img-prod1").src = "https://www.krossin.fr/wp-content/uploads/2024/03/1_collier-diamants-christie-s-2-krossin-bijouterie-colliers-les-plus-chers-600x495.jpg"; 
    document.getElementById("img-prod2").src = "https://i.pinimg.com/736x/50/d7/04/50d70468b586ed29e689a80dd729689f.jpg";
    document.getElementById("img-prod3").src = "https://www.universfleuri.com/wp-content/uploads/2024/12/collier-fleur-br-classe-1.jpg";
    document.getElementById("img-prod4").src = "https://agcw.store/cdn/shop/files/black-clover-bracelet-shot.jpg?v=1745653696&width=1426";
    document.getElementById("img-prod5").src = "https://ae-pic-a1.aliexpress-media.com/kf/S637f0111af2d4dacbade46a944101fa7X/Bracelets-tanches-en-acier-inoxydable-dor-pour-femme-design-tendance-cadeau-de-marque-de-luxe.jpg_.webp";
    document.getElementById("img-prod6").src = "https://www.laboutiquedeshommes.com/cdn/shop/files/Bracelet_photo_personnalise_luxe_argent_et_or.jpg?v=1728500959&width=600";
    document.getElementById("img-prod7").src = "https://i.pinimg.com/originals/c4/bc/55/c4bc552db0d88fced2a2ee6f13465044.jpg";
    document.getElementById("img-prod8").src = "https://www.beaute-revolution.fr/wp-content/uploads/391f2b69-8628-4b32-a1e0-e1765e48f32a.png";
    document.getElementById("img-prod9").src = "https://t4.ftcdn.net/jpg/05/75/14/43/360_F_575144312_kMPnCidchCvdJTt1FwXCAbFms8CDumjO.jpg";






  
    let totalPanier = 0;
    let nombreArticles = 0;

  
    const cartSidebar = document.getElementById("cart-sidebar");
    const cartToggle = document.getElementById("cart-toggle");
    const cartClose = document.getElementById("cart-close");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

  
    cartToggle.addEventListener("click", () => {
        cartSidebar.classList.add("open");
    });

    cartClose.addEventListener("click", () => {
        cartSidebar.classList.remove("open");
    });

   
    function ajouterAuPanier(nomProduit, prixProduit) {
     
        nombreArticles++;
        cartCount.innerText = nombreArticles;

       
        totalPanier += prixProduit;
        cartTotal.innerText = totalPanier.toFixed(2) + " €";

   
        const ligneTexte = document.createElement("p");
        ligneTexte.style.padding = "8px 0";
        ligneTexte.style.borderBottom = "1px solid #1f2937";
        ligneTexte.style.fontSize = "0.95rem";
        ligneTexte.innerHTML = `✨ ${nomProduit} — <strong>${prixProduit.toFixed(2)} €</strong>`;
        
       
        cartItemsContainer.appendChild(ligneTexte);


        cartSidebar.classList.add("open");
    }


    document.getElementById("add-prod1").addEventListener("click", () => {
        ajouterAuPanier("Collier Or Éternel", 290.00);
    });

    document.getElementById("add-prod2").addEventListener("click", () => {
        ajouterAuPanier("Bague Diamant Pureté", 450.00);
    });

    document.getElementById("add-prod3").addEventListener("click", () => {
        ajouterAuPanier("Bracelet Maillons Nobles", 180.00);
    });

    document.getElementById("add-prod4").addEventListener("click", () => {
        ajouterAuPanier("Nuit Impériale", 110.00);
    });

    document.getElementById("add-prod5").addEventListener("click", () => {
        ajouterAuPanier("Aura Céleste", 125.00);
    });



    const btnAll = document.getElementById("btn-all");
    const btnBijoux = document.getElementById("btn-bijoux");
    const btnParfums = document.getElementById("btn-parfums");

    const cartesBijoux = document.querySelectorAll(".item-bijoux");
    const cartesParfums = document.querySelectorAll(".item-parfums");

    
    function desactiverBoutonsFiltre() {
        btnAll.classList.remove("active");
        btnBijoux.classList.remove("active");
        btnParfums.classList.remove("active");
    }

   
    btnAll.addEventListener("click", () => {
        desactiverBoutonsFiltre();
        btnAll.classList.add("active");

        
        cartesBijoux.forEach(carte => carte.style.display = "flex");
        cartesParfums.forEach(carte => carte.style.display = "flex");
    });

    
    btnBijoux.addEventListener("click", () => {
        desactiverBoutonsFiltre();
        btnBijoux.classList.add("active");

       
        cartesBijoux.forEach(carte => carte.style.display = "flex");
        cartesParfums.forEach(carte => carte.style.display = "none");
    });


    btnParfums.addEventListener("click", () => {
        desactiverBoutonsFiltre();
        btnParfums.classList.add("active");

     
        cartesBijoux.forEach(carte => carte.style.display = "none");
        cartesParfums.forEach(carte => carte.style.display = "flex");
    });
});