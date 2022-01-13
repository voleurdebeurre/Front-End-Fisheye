class HomePhotographers{
  constructor(){
    this.$photographersSection = document.querySelector(".photographer_section")
    this.photographersFetcher = new PhotographersData("./data/photographers.json")
  }

  async main(){
    // Contient les données du json source
    const photographersData = await this.photographersFetcher.getPhotographers()

    // Contient les données du node photographers
    const Photographers = photographersData.photographers

    // Affiche les cartes de photographes
    Photographers.forEach((photographer) => {
        const PhotographerData = new PhotographerCardDisplay(photographer);
        this.$photographersSection.appendChild(
          PhotographerData.createPhotographerCard()
        )
    });
  }
}

const home = new HomePhotographers()
home.main()
