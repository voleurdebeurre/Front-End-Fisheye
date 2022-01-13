//Mettre le code JavaScript lié à la page photographer.html
class SinglePhotographerPage{
  constructor(){
    this.$singlePhotographerSection = document.querySelector(".photographer-single-page")
    this.photographersFetcher = new PhotographersData("./data/photographers.json")
  }

  async main(){
    // Contient les données du json source
    const photographersData = await this.photographersFetcher.getPhotographers()

    // Contient les données du node photographers
    const Photographers = photographersData.photographers
    // Contient les données du node media
    const PhotographersMedias = photographersData.media

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const clickedPhotographer = urlParams.get("id")


    // Affiche les cartes de photographes
    Photographers.forEach((photographer) => {
      if(photographer.id == clickedPhotographer){
        const SinglePhotographer = new PhotographerSinglePageMetaDisplay(photographer)
        this.$singlePhotographerSection.appendChild(
          SinglePhotographer.createSinglePhotographerMeta()
        )
      }
    });
  }
}

const home = new SinglePhotographerPage()
home.main()
