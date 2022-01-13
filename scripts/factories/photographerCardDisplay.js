class PhotographerCardDisplay{
  constructor(photographer){
    this._photographer = photographer
  }

  // Crée la structure d'une carte de photographe
  createPhotographerCard(){

    // Crée un article
    const article = document.createElement("article");
    // Puis un lien cliquable
    const articleLink = document.createElement("a");
    // Ajoute un attribut src au lien pour rediriger vers une single page de photographe
    const articleLinkPath = "photographer.html?id=" + this._photographer.id;
    articleLink.setAttribute("href", articleLinkPath)

    // Crée le tag img qui contient la photo du photographe
    const img = document.createElement("img");
    // Ajoute les attributs src et alt à l'image
    Object.assign(img, {
      src: "./assets/photographers/" + this._photographer.portrait,
      alt: this._photographer.name
    })
    img.classList.add("rounded-picture");

    // Crée les tags qui contiennent les ville, pays, tagline et prix du photographe
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const h5 = document.createElement("h5");
    h2.textContent = this._photographer.name;
    h3.textContent = this._photographer.city + ", " + this._photographer.country;
    h4.textContent = this._photographer.tagline;
    h5.textContent = this._photographer.price + "€/jour";

    // Crée le bloc entier d'un photographe
    article.appendChild(articleLink);
    articleLink.appendChild(img);
    articleLink.appendChild(h2);
    articleLink.appendChild(h3);
    articleLink.appendChild(h4);
    articleLink.appendChild(h5);

    return (article);
  }
}
