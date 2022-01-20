function createPhotographerMediaGallery(photographersMediaNode,
                                photographer
                              ){

  // Container de la galerie
  const galleryContainer = document.querySelector(".gallery")


  photographersMediaNode.forEach((media) => {
    if(media.photographerId == photographer.id){
      if(media.image){
        createImageItem(media, photographer)
      }else if(media.video){
        createVideoItem(media, photographer)
      }
    }
  })

  function createImageItem(media, photographer){
    // Container d'un objet de gallerie
    const galleryItem = document.createElement("div")
    galleryItem.classList.add("gallery-item");
    galleryItem.setAttribute("data-media-date", media.date)

    // Image d'un objet de gallerie
    const galleryItemFigure = document.createElement("figure")
    // Lien autour de l'image
    const galleryItemFigcaptionure = document.createElement("a")
    galleryItemFigcaptionure.setAttribute("href", "#")
    galleryItemFigure.appendChild(galleryItemFigcaptionure)
    // Image
    const galleryItemFigcapure = document.createElement("img")
    // Ajoute les attributs src et alt à l'image
    Object.assign(galleryItemFigcapure, {
      src: "./assets/images/" + photographer.name.split(" ")[0] + "/" + media.image,
      alt: media.title
    })
    // Met l'image dans le lien
    galleryItemFigcaptionure.appendChild(galleryItemFigcapure)
    // Met figcaption dans le container
    galleryItem.appendChild(galleryItemFigure);

    // Titre d'un objet de gallerie
    const galleryItemFigcaption= document.createElement("figcaption")
    galleryItemFigcaption.textContent = media.title
    galleryItem.appendChild(galleryItemFigcaption);

    // Container du compteur de likes de l'objet de galerie
    const galleryItemLikesContainer = document.createElement("div")
    galleryItemLikesContainer.classList.add("gallery-likes-counter");
    // Compteur de likes de l'objet de galerie
    const galleryItemLikes = document.createElement("p")
    galleryItemLikes.textContent = media.likes
    galleryItemLikesContainer.appendChild(galleryItemLikes);

    // Likes icon
    // Lien autour de l'icone
    const galleryItemLikesIcon = document.createElement("a")
    galleryItemLikesIcon.setAttribute("href", "#")
    const galleryItemSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    galleryItemSvg.setAttribute("width", "24")
    galleryItemSvg.setAttribute("height", "24")
    galleryItemSvg.setAttribute("viewBox", "0 0 24 24")
    const galleryItemSvgPath = document.createElementNS("http://www.w3.org/2000/svg", "path")
    galleryItemSvgPath.setAttribute("d", "M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z");
    galleryItemSvg.appendChild(galleryItemSvgPath);
    galleryItemLikesIcon.appendChild(galleryItemSvg);

    galleryItemLikesContainer.appendChild(galleryItemLikesIcon)

    galleryContainer.appendChild(galleryItem);
    galleryItem.appendChild(galleryItemLikesContainer);
  }

  function createVideoItem(media, photographer){
    // Container d'un objet de gallerie
    const galleryItem = document.createElement("div")
    galleryItem.classList.add("gallery-item");
    galleryItem.setAttribute("data-media-date", media.date)

    // Image d'un objet de gallerie
    const galleryItemFigure = document.createElement("figure")
    // Lien autour de l'image
    const galleryItemFigcaptionure = document.createElement("a")
    galleryItemFigcaptionure.setAttribute("href", "#")
    galleryItemFigure.appendChild(galleryItemFigcaptionure)
    // Image
    const galleryItemFigcapure = document.createElement("video")
    // Ajoute les attributs src et alt à l'image
    Object.assign(galleryItemFigcapure, {
      src: "./assets/images/" + photographer.name.split(" ")[0] + "/" + media.video,
      alt: media.title
    })
    // Met l'image dans le lien
    galleryItemFigcaptionure.appendChild(galleryItemFigcapure)
    // Met figcaption dans le container
    galleryItem.appendChild(galleryItemFigure);

    // Titre d'un objet de gallerie
    const galleryItemFigcaption= document.createElement("figcaption")
    galleryItemFigcaption.textContent = media.title
    galleryItem.appendChild(galleryItemFigcaption);

    // Container du compteur de likes de l'objet de galerie
    const galleryItemLikesContainer = document.createElement("div")
    galleryItemLikesContainer.classList.add("gallery-likes-counter");
    // Compteur de likes de l'objet de galerie
    const galleryItemLikes = document.createElement("p")
    galleryItemLikes.textContent = media.likes
    galleryItemLikesContainer.appendChild(galleryItemLikes);

    // Likes icon
    // Lien autour de l'icone
    const galleryItemLikesIcon = document.createElement("a")
    galleryItemLikesIcon.setAttribute("href", "#")
    const galleryItemSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    galleryItemSvg.setAttribute("width", "24")
    galleryItemSvg.setAttribute("height", "24")
    galleryItemSvg.setAttribute("viewBox", "0 0 24 24")
    const galleryItemSvgPath = document.createElementNS("http://www.w3.org/2000/svg", "path")
    galleryItemSvgPath.setAttribute("d", "M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z");
    galleryItemSvg.appendChild(galleryItemSvgPath);
    galleryItemLikesIcon.appendChild(galleryItemSvg);

    galleryItemLikesContainer.appendChild(galleryItemLikesIcon)

    galleryContainer.appendChild(galleryItem);
    galleryItem.appendChild(galleryItemLikesContainer);
  }

  return ;
}
