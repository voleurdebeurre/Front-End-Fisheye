const galleryModal = document.querySelectorAll(".lightbox-gallery")[0]

// Crée la lightbox contenant les medias
function createPhotographerMediaLightbox(){
    const allPhotographerMediasArray = document.querySelectorAll(".gallery-item")
    const gallerySpotlightContainer = document.querySelectorAll(".gallery-spotlight")[0]
    galleryModal.setAttribute("aria-hidden", "true")
    galleryModal.setAttribute("aria-describedby", "Gallerie de photos & Videos")

    // Clone tous les médias dans le container de la lightbox
    allPhotographerMediasArray.forEach((singleMedia) => {
        let mediaTitle = singleMedia.getAttribute("data-media-title")
        singleMedia.setAttribute("aria-label", "Vous regardez " + mediaTitle)
        singleMedia.setAttribute("aria-hidden", "true")
        gallerySpotlightContainer.appendChild(singleMedia.cloneNode(true))
    }); 

    // Ajoute attributs pour cibler spécifiquement les médias dans la lightbox
    const allMediasInCreatedGallery = gallerySpotlightContainer.querySelectorAll(".gallery-item")
    allMediasInCreatedGallery.forEach((singleMediaInCreatedGallery) =>{
        singleMediaInCreatedGallery.firstChild.firstChild.setAttribute("href", "javascript:;")
        singleMediaInCreatedGallery.firstChild.firstChild.setAttribute("aria-haspopup", "false")
        singleMediaInCreatedGallery.firstChild.firstChild.removeAttribute("aria-label")
        singleMediaInCreatedGallery.firstChild.firstChild.removeAttribute("onClick")
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
    galleryModal.setAttribute("aria-hidden", "true")
    galleryModal.style.display = "none"
}

// Affiche la lightbox au click sur un média
function displayClickedMedia(clickedMedia){
    let removeActiveMediaClass = document.querySelectorAll(".media-active");
    removeActiveMediaClass.forEach((activeMedia) =>{
        activeMedia.classList.remove("media-active")
        activeMedia.setAttribute("aria-hidden", "true")
    })
    const galleryModal = document.querySelectorAll(".lightbox-gallery")[0]
    galleryModal.setAttribute("aria-hidden", "false")
    galleryModal.style.display = "flex";

    const getClickedMediaId = clickedMedia.parentNode.parentNode.getAttribute("data-media-id")

    const allMediasInGallery = document.querySelectorAll(".in-lightbox")
    allMediasInGallery.forEach((singleMediaInGallery) => {
        if(singleMediaInGallery.getAttribute("data-media-id") == getClickedMediaId){
            singleMediaInGallery.classList.add("media-active")
            activeMedia.setAttribute("aria-hidden", "false")
            addOrRemoveNavArrows()
        }
    });

}

function addOrRemoveNavArrows(){
    
    const activeMediaItem = document.querySelectorAll(".media-active")[0]
    const allMediasInGallery = document.querySelectorAll(".in-lightbox")
    const galleryLeftArrow = document.querySelectorAll(".lightbox-controls:nth-child(1)")[0].children[0].children[0]
    const galleryRightArrow = document.querySelectorAll(".lightbox-controls:nth-child(3)")[0].children[0].children[0]

    console.log(activeMediaItem, allMediasInGallery[0], allMediasInGallery[allMediasInGallery.length -1])
    if(activeMediaItem == allMediasInGallery[0]){
        console.log("premier media")
        galleryLeftArrow.style.display = "none"
        galleryRightArrow.style.display = "block"
    }else if(activeMediaItem == allMediasInGallery[allMediasInGallery.length -1]){
        galleryRightArrow.style.display = "none"   
        galleryLeftArrow.style.display = "block"
        console.log("dernier media")
    }else{
        galleryLeftArrow.style.display = "block"
        galleryRightArrow.style.display = "block"
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
    const activeMediaItem = document.querySelectorAll(".media-active")[0]
    activeMediaItem.nextSibling.classList.add("media-active")
    activeMediaItem.setAttribute("aria-hidden", "true")
    activeMediaItem.nextSibling.setAttribute("aria-hidden", "false")
    activeMediaItem.classList.remove("media-active")
    addOrRemoveNavArrows()
}

function prevGalleryItem(){
    addOrRemoveNavArrows()
    const activeMediaItem = document.querySelectorAll(".media-active")[0]
    activeMediaItem.setAttribute("aria-hidden", "true")
    activeMediaItem.previousElementSibling.setAttribute("aria-hidden", "false")
    activeMediaItem.previousElementSibling.classList.add("media-active")
    activeMediaItem.classList.remove("media-active")
    addOrRemoveNavArrows()
}