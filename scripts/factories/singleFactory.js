function createSinglePhotographerCard(photographersNode,
                                      photographersMediaNode,
                                      photographer
                                    ){

  // Json to variables
  const photographerName = photographer.name;
  const photographerId = photographer.id;
  const photographerCity = photographer.city;
  const photographerCountry = photographer.country;
  const photographerTagline = photographer.tagline;
  const photographerPrice = photographer.price;
  const photographerPortrait = photographer.portrait;

  // Nom du photographe
  const photographerNameContainer = document.querySelector(".photographer-header_meta h2")
  photographerNameContainer.textContent = photographerName;

  // Ville et pays du photographe
  const photographerCityContainer = document.querySelector(".photographer-header_meta h3")
  photographerCityContainer.textContent = photographerCity + ", " + photographerCountry;

  // Tagline du photographe
  const photographerTaglineContainer = document.querySelector(".photographer-header_meta h4")
  photographerTaglineContainer.textContent = photographerTagline


  // Portrait du photographe
  const photographerPortraitContainer = document.querySelector(".photographer-header_photo")
  // Crée le tag img qui contient la photo du photographe
  const portrait = document.createElement("img");
  // Ajoute les attributs src et alt à l'image
  Object.assign(portrait, {
    src: "./assets/photographers/" + photographerPortrait,
    alt: "Portrait de " + photographerName
  })
  portrait.classList.add("rounded-picture");
  photographerPortraitContainer.appendChild(portrait)

  // Compteur de likes du photographe
  let photographerGlobalLikesCounter = 0;
  photographersMediaNode.forEach((media) => {
    if(media.photographerId == photographerId){
      photographerGlobalLikesCounter += media.likes;
    }
  })

  const photographerGlobalLikesCounterContainer = document.querySelector(".photographer-global-likes")
  photographerGlobalLikesCounterContainer.innerHTML = photographerGlobalLikesCounter;

  // Prix du photographe
  const photographerPriceContainer = document.querySelector(".photographer-price")
  photographerPriceContainer.textContent = photographerPrice + "€/jour"

  // Nom du photographe dans la modal de contact
  const photographerContactNameContainer = document.querySelector(".contact-photographer-name")
  photographerContactNameContainer.textContent = photographerName;

  return (photographerGlobalLikesCounterContainer,
          photographerNameContainer,
          photographerCityContainer,
          photographerTaglineContainer,
          photographerPriceContainer
        );
}
