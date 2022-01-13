//Mettre le code JavaScript lié à la page photographer.html
class SinglePhotographer{
  constructor(){
    this.$photographersSection = document.querySelector(".main")
    this.$photographerID = document.querySelector("body").id
    this.photographersFetcher = new PhotographersData("./data/photographers.json")
  }

  async main(){
    // Contient les données du json source
    const photographersData = await this.photographersFetcher.getPhotographers()

    // Contient les données du node photographers
    const Photographers = photographersData.photographers
    // Contient les données du node media
    const PhotographersMedias = photographersData.media

    // Affiche les cartes de photographes
    Photographers.forEach((photographer) => {
        const PhotographerData = new PhotographerCardDisplay(photographer);
        this.$photographersSection.appendChild(
          PhotographerData.createPhotographerCard()
        )
    });
  }
}

const home = new SinglePhotographer()
home.main()
