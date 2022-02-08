function actionOnLikesCounter(clickedMediaCounter){
    // Incrémente le compteur de like d'un média
    if(clickedMediaCounter.firstElementChild.classList.contains("heart-not-clicked")){
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

        clickedMediaCounter.firstElementChild.classList.remove("heart-not-clicked")
        clickedMediaCounter.firstElementChild.classList.add("heart-clicked")
    }else{
        const likesCounter = clickedMediaCounter.previousElementSibling
        const likesCounterToNumber = parseInt(likesCounter.textContent)
        const incrementedlikesCounter =  likesCounterToNumber - 1;
        const likesCounterMediaContainer = clickedMediaCounter.parentNode.parentNode
        likesCounterMediaContainer.setAttribute("data-media-likes", incrementedlikesCounter)
        likesCounter.innerText = incrementedlikesCounter

        // Incrémente le compteur de likes du photographe
        const photographerGlobalLikesSelector = document.querySelectorAll(".photographer-global-likes")[0]
        photographerGlobalLikes = parseInt(photographerGlobalLikesSelector.textContent)
        const incrementphotographerGlobalLikes = photographerGlobalLikes - 1
        photographerGlobalLikesSelector.innerText = incrementphotographerGlobalLikes

        clickedMediaCounter.firstElementChild.classList.remove("heart-clicked")
        clickedMediaCounter.firstElementChild.classList.add("heart-not-clicked")
    }
    
}