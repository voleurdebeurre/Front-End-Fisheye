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

class PhotographerSinglePageMetaDisplay{
  constructor(photographer){
    this._photographer = photographer
  }

  // Crée la structure de la page d'un photographe
  createSinglePhotographerMeta(){

    // Crée un article
    const photographerHeader = document.createElement("section");
    photographerHeader.classList.add("photographer-header");

    const photographerFooterMeta = document.createElement("div");
    photographerFooterMeta.classList.add("photographer-footer_meta");

    const photographerFooterLikes = document.createElement("div");
    photographerFooterLikes.classList.add("photographer-footer_likes");

    const photographerLikesCounter = document.createElement("p");
    const photographerLikesIcon = document.createElement("svg");
    const photographerLikesIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    photographerLikesIconPath.setAttribute("d", "M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z")
    photographerLikesIcon.appendChild(photographerLikesIconPath)

    const photographerDailyRate = document.createElement("p");
    photographerDailyRate.textContent = this._photographer.price + "€/jour";

    const photographerHeaderMeta = document.createElement("div");
    photographerHeaderMeta.classList.add("photographer-header_meta");

    // Crée les tags qui contiennent les ville, pays, tagline et prix du photographe
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const h5 = document.createElement("h5");
    h2.textContent = this._photographer.name;
    h3.textContent = this._photographer.city + ", " + this._photographer.country;
    h4.textContent = this._photographer.tagline;

    const photographerHeaderContact = document.createElement("div");
    photographerHeaderContact.classList.add("photographer-header_contact");
    const photographerHeaderContactButton = document.createElement("button");
    photographerHeaderContactButton.classList.add("contact_button");
    photographerHeaderContactButton.textContent = "Contactez-moi";

    const photographerHeaderPhoto = document.createElement("div");
    photographerHeaderPhoto.classList.add("photographer-header_photo");
    // Crée le tag img qui contient la photo du photographe
    const img = document.createElement("img");
    // Ajoute les attributs src et alt à l'image
    Object.assign(img, {
      src: "./assets/photographers/" + this._photographer.portrait,
      alt: this._photographer.name
    })
    img.classList.add("rounded-picture");


    photographerHeader.appendChild(photographerFooterMeta);
    photographerFooterMeta.appendChild(photographerFooterLikes);
    photographerFooterMeta.appendChild(photographerLikesCounter);
    photographerFooterMeta.appendChild(photographerLikesIcon);
    photographerFooterMeta.appendChild(photographerDailyRate);

    photographerHeader.appendChild(photographerHeaderMeta);
    photographerHeaderMeta.appendChild(h2);
    photographerHeaderMeta.appendChild(h3);
    photographerHeaderMeta.appendChild(h4);
    photographerHeaderMeta.appendChild(h5);
    photographerHeaderContact.appendChild(photographerHeaderContactButton);
    photographerHeader.appendChild(photographerHeaderContact);
    photographerHeaderPhoto.appendChild(img);
    photographerHeader.appendChild(photographerHeaderPhoto);

    return (photographerHeader);
  }


}
