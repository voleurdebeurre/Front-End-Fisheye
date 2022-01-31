// Crée la lightbox contenant les medias
function createPhotographerMediaLightbox(){
    const allPhotographerMediasArray = document.querySelectorAll(".gallery-item")
    const gallerySpotlightContainer = document.querySelectorAll(".gallery-spotlight")[0]

    // Clone tous les médias dans le container de la lightbox
    allPhotographerMediasArray.forEach((singleMedia) => {
        gallerySpotlightContainer.appendChild(singleMedia.cloneNode(true))
    }); 

    // Ajoute attributs pour cibler spécifiquement les médias dans la lightbox
    const allMediasInCreatedGallery = gallerySpotlightContainer.querySelectorAll(".gallery-item")
    allMediasInCreatedGallery.forEach((singleMediaInCreatedGallery) =>{
        singleMediaInCreatedGallery.firstChild.firstChild.setAttribute("href", "javascript:;")
        let checkMediaType = singleMediaInCreatedGallery.firstChild.firstChild.firstChild
        // Si le media est une video, ajoute les controls
        if(checkMediaType.nodeName == "VIDEO"){
            let checkMediaTypeSource = checkMediaType.getAttribute("src")
            checkMediaType.setAttribute("controls", true)
            checkMediaType.removeAttribute("src")
            let sourceTag = document.createElement("source")
            sourceTag.setAttribute("src", checkMediaTypeSource)
            sourceTag.setAttribute("type", "video/mp4")
            checkMediaType.appendChild(sourceTag)
            singleMediaInCreatedGallery.classList.add("in-lightbox")
        }else{
            singleMediaInCreatedGallery.classList.add("in-lightbox")
        }
    })
    
} 

// Ferme la lightbox
function closeMediaGallery(){
    const galleryModal = document.querySelectorAll(".lightbox-gallery")[0]
    galleryModal.style.display = "none"
}

// Affiche la lightbox au click sur un média
function displayClickedMedia(clickedMedia){
    const galleryModal = document.querySelectorAll(".lightbox-gallery")[0]
    galleryModal.style.display = "flex";

    const getClickedMediaId = clickedMedia.parentNode.parentNode.getAttribute("data-media-id")

    const allMediasInGallery = document.querySelectorAll(".in-lightbox")
    allMediasInGallery.forEach((singleMediaInGallery) => {
        if(singleMediaInGallery.getAttribute("data-media-id") == getClickedMediaId){
            singleMediaInGallery.classList.add("media-active")
        }
    });

    addOrRemoveNavArrows()
}

function addOrRemoveNavArrows(){
    const activeMediaItem = document.querySelectorAll(".media-active")[0]
    const allMediasInGallery = document.querySelectorAll(".in-lightbox")
    const galleryLeftArrow = document.querySelectorAll(".lightbox-controls:nth-child(1)")[0].children[0].children[0]
    const galleryRightArrow = document.querySelectorAll(".lightbox-controls:nth-child(3)")[0].children[0].children[0]
    if(activeMediaItem == allMediasInGallery[0]){
        galleryLeftArrow.style.display = "none"
    }else if(activeMediaItem == allMediasInGallery[allMediasInGallery.length -1]){
        galleryRightArrow.style.display = "none"
    }
}

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    // Détecte l'appui sur la flêche gauche
    if (e.keyCode == '37') {
        prevGalleryItem()
    }
    // Détecte l'appui sur la flêche droite
    else if (e.keyCode == '39') {
        nextGalleryItem()
    }
}

function nextGalleryItem(){
    addOrRemoveNavArrows()
    let galleryLeftArrow = document.querySelectorAll(".lightbox-controls:nth-child(1)")[0]
    galleryLeftArrow.children[0].children[0].style.display = "block"
    const activeMediaItem = document.querySelectorAll(".media-active")[0]
    activeMediaItem.nextSibling.classList.add("media-active")
    activeMediaItem.classList.remove("media-active")
    addOrRemoveNavArrows()
}

function prevGalleryItem(){
    addOrRemoveNavArrows()
    let galleryRightArrow = document.querySelectorAll(".lightbox-controls:nth-child(3)")[0]
    galleryRightArrow.children[0].children[0].style.display = "block"
    const activeMediaItem = document.querySelectorAll(".media-active")[0]
    activeMediaItem.previousElementSibling.classList.add("media-active")
    activeMediaItem.classList.remove("media-active")
    addOrRemoveNavArrows()
}