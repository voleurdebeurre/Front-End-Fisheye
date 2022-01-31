function actionOnLikesCounter(clickedMediaCounter){
    // Incrémente le compteur de like d'un média
    const likesCounter = clickedMediaCounter.previousElementSibling
    const likesCounterToNumber = parseInt(likesCounter.textContent)
    const incrementedlikesCounter =  likesCounterToNumber + 1;
    const likesCounterMediaContainer = clickedMediaCounter.parentNode.parentNode
    likesCounterMediaContainer.setAttribute("data-media-likes", incrementedlikesCounter)
    likesCounter.innerText = incrementedlikesCounter

    // Incrémente le compteur de likes du photographe
    const photographerGlobalLikesSelector = document.querySelectorAll(".photographer-global-likes")[0]
    photographerGlobalLikes = parseInt(photographerGlobalLikesSelector.textContent)
    const incrementphotographerGlobalLikes = photographerGlobalLikes + 1
    photographerGlobalLikesSelector.innerText = incrementphotographerGlobalLikes
}