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
    galleryItem.setAttribute("aria-label", "Ouvrir " + media.title)
    galleryItem.setAttribute("data-media-date", media.date)
    galleryItem.setAttribute("data-media-likes", media.likes)
    galleryItem.setAttribute("data-media-title", media.title)
    galleryItem.setAttribute("data-media-id", media.id)

    // Image d'un objet de gallerie
    const galleryItemFigure = document.createElement("figure")
    // Lien autour de l'image
    const galleryItemFigcaptionLink = document.createElement("a")
    galleryItemFigcaptionLink.setAttribute("href", "javascript:;")
    galleryItemFigcaptionLink.setAttribute("aria-label", "Agrandir la photo " + media.title)
    galleryItemFigcaptionLink.setAttribute("aria-haspopup", "true")
    galleryItemFigcaptionLink.setAttribute("onClick", "javascript:displayClickedMedia(this);")
    galleryItemFigure.appendChild(galleryItemFigcaptionLink)
    // Image
    const galleryItemFigureImg = document.createElement("img")
    // Ajoute les attributs src et alt à l'image
    Object.assign(galleryItemFigureImg, {
      src: "./assets/images/" + photographer.name.split(" ")[0] + "/" + media.image,
      alt: media.title
    })
    // Met l'image dans le lien
    galleryItemFigcaptionLink.appendChild(galleryItemFigureImg)
    // Met figcaption dans le container
    galleryItem.appendChild(galleryItemFigure);

    // Titre d'un objet de gallerie
    const galleryItemFigcaption = document.createElement("figcaption")
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
    galleryItemLikesIcon.setAttribute("onClick", "actionOnLikesCounter(this)")
    galleryItemLikesIcon.setAttribute("href", "javascript:;")
    galleryItemLikesIcon.setAttribute("aria-label", "Incrémenter le compteur de likes pour ce media")
    galleryItemLikesIcon.innerHTML = "Incrémenter le compteur de likes pour ce media"
    const galleryItemSvg = document.createElement("span")
    galleryItemSvg.setAttribute("class", "heart-not-clicked")
    galleryItemSvg.setAttribute("role", "img")
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
    galleryItem.setAttribute("data-media-likes", media.likes)
    galleryItem.setAttribute("data-media-title", media.video.replace(/\.[^/.]+$/, "").replace(/_/g, " "))
    galleryItem.setAttribute("data-media-id", media.id)

    // Image d'un objet de gallerie
    const galleryItemFigure = document.createElement("figure")
    // Lien autour de la video
    const galleryItemFigcaptionLink = document.createElement("a")
    galleryItemFigcaptionLink.setAttribute("href", "javascript:;")
    galleryItemFigcaptionLink.setAttribute("aria-haspopup", "true")
    galleryItemFigcaptionLink.setAttribute("aria-label", "Agrandir la video " + media.video.replace(/\.[^/.]+$/, "").replace(/_/g, " "))
    galleryItemFigcaptionLink.innerHTML = "Agrandir la video " + media.video.replace(/\.[^/.]+$/, "").replace(/_/g, " ")
    galleryItemFigcaptionLink.setAttribute("onClick", "javascript:displayClickedMedia(this);")
    galleryItemFigure.appendChild(galleryItemFigcaptionLink)
    // Image
    const galleryItemFigureVideo = document.createElement("video")
    // Ajoute les attributs src et alt à l'image
    Object.assign(galleryItemFigureVideo, {
      src: "./assets/images/" + photographer.name.split(" ")[0] + "/" + media.video,
    })
    // Met l'image dans le lien
    galleryItemFigcaptionLink.appendChild(galleryItemFigureVideo)
    // Met figcaption dans le container
    galleryItem.appendChild(galleryItemFigure);

    // Titre d'un objet de gallerie
    const galleryItemFigcaption = document.createElement("figcaption")
    galleryItemFigcaption.textContent = media.video.replace(/\.[^/.]+$/, "").replace(/_/g, " ")
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
    galleryItemLikesIcon.setAttribute("onClick", "actionOnLikesCounter(this)")
    galleryItemLikesIcon.setAttribute("aria-label", "Incrémenter le compteur de likes pour ce media")
    galleryItemLikesIcon.innerHTML = "Incrémenter le compteur de likes pour ce media"
    galleryItemLikesIcon.setAttribute("class", "single-likes-counter")
    const galleryItemSvg = document.createElement("span")
    galleryItemSvg.setAttribute("class", "heart-not-clicked")
    galleryItemLikesIcon.appendChild(galleryItemSvg);

    galleryItemLikesContainer.appendChild(galleryItemLikesIcon)

    galleryContainer.appendChild(galleryItem);
    galleryItem.appendChild(galleryItemLikesContainer);
  }

  return ;
}
