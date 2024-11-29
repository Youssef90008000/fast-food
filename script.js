const fastFoods = [
    {
        nom: "McDonald's",
        logo: "Logo_France_Mcdo.png",
        prixMoyen: 8,
        dateCreation: "1940",
        revenus: 23.2,
        employes: 200000,
        horaires: "06:00 - 23:00"
    },
    {
        nom: "Burger King",
        logo: "Burger_King_logo.png",
        prixMoyen: 7.5,
        dateCreation: "1954",
        revenus: 10.3,
        employes: 34000,
        horaires: "10:00 - 22:00"
    },
    {
        nom: "KFC",
        logo: "KFC-Logo.png",
        prixMoyen: 7,
        dateCreation: "1930",
        revenus: 27.9,
        employes: 25000,
        horaires: "11:00 - 23:00"
    },
    {
        nom: "Subway",
        logo: "subway-logo.png",
        prixMoyen: 6.5,
        dateCreation: "1965",
        revenus: 16.1,
        employes: 410000,
        horaires: "08:00 - 21:00"
    }
];

const main = document.querySelector("main");

fastFoods.forEach(fastFood => {
    // Créer la carte
    const card = document.createElement("div");
    card.className = "card";

    // Ajouter le logo
    const logoDiv = document.createElement("div");
    logoDiv.className = "logo";
    const logoImg = document.createElement("img");
    logoImg.src = fastFood.logo;
    logoImg.alt = `Logo de ${fastFood.nom}`;
    logoDiv.appendChild(logoImg);

    // Ajouter le contenu
    const contenuDiv = document.createElement("div");
    contenuDiv.className = "contenu";
    contenuDiv.innerHTML = `
        <h1>${fastFood.nom}</h1>
        <p>Prix moyen : ${fastFood.prixMoyen} €</p>
        <p>Date de création : ${fastFood.dateCreation}</p>
        <p>Revenus : ${fastFood.revenus}</p>
        <p>Employés : ${fastFood.employes}</p>
        <p>Horaires : ${fastFood.horaires}</p>
    `;

    // Assembler la carte
    card.appendChild(logoDiv);
    card.appendChild(contenuDiv);

    // Ajouter la carte au <main>
    main.appendChild(card);
});
