function createPhotographerCard(photographerName, photographerId, photographerCity, photographerCountry, photographerTagline, photographerPrice, photographerPortrait){
  //Crée un article
  const article = document.createElement("article");
  // Puis un lien cliquable
  const articleLink = document.createElement("a");
  // Ajoute un attribut src au lien pour rediriger vers une single page de photographe
  const articleLinkPath = "photographer.html?id=" + photographerId;
  articleLink.setAttribute("href", articleLinkPath)

  // Crée le tag img qui contient la photo du photographe
  const img = document.createElement("img");
  // Ajoute les attributs src et alt à l'image
  Object.assign(img, {
    src: "./assets/photographers/" + photographerPortrait,
    alt: "portrait de " + photographerName
  })
  img.classList.add("rounded-picture");

  // Crée les tags qui contiennent les ville, pays, tagline et prix du photographe
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const staticTagline = document.createElement("p");
  staticTagline.classList.add("home-tagline")
  const staticPrice = document.createElement("p");
  staticPrice.classList.add("home-price")
  h2.textContent = photographerName;
  h3.textContent = photographerCity + ", " + photographerCountry;
  staticTagline.textContent = photographerTagline;
  staticPrice.textContent = photographerPrice + "€/jour";

  // Crée le bloc entier d'un photographe
  article.appendChild(articleLink);
  articleLink.appendChild(img);
  articleLink.appendChild(h2);
  articleLink.appendChild(h3);
  article.appendChild(staticTagline);
  article.appendChild(staticPrice);

  return (article);
}
