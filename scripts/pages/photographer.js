class SinglePhotographer{
  constructor(){
    this.photographersFetcher = new PhotographersData("./data/photographers.json")
  }

  async main(){

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const clickedPhotographer = urlParams.get("id")

    // Contient les données du json source
    const photographersData = await this.photographersFetcher.getPhotographers()

    // Contient les données du node photographers
    const photographersNode = photographersData.photographers

    // Contient les données du node photographers
    const photographersMediaNode = photographersData.media

    photographersNode.forEach((photographer) => {
      if(photographer.id == clickedPhotographer){
        // console.log(photographer)
        createSinglePhotographerCard(photographersNode, photographersMediaNode, photographer)
        createPhotographerMediaGallery(photographersMediaNode, photographer)
      }
    });

    createPhotographerMediaLightbox();
    
  }
}

const home = new SinglePhotographer()
home.main()
