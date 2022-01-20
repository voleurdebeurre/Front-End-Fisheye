class HomePhotographers{
  constructor(){
    this.$photographersSection = document.querySelector(".photographer_section")
    this.photographersFetcher = new PhotographersData("./data/photographers.json")
  }

  async main(){
    // Contient les données du json source
    const photographersData = await this.photographersFetcher.getPhotographers()

    // Contient les données du node photographers
    const photographersNode = photographersData.photographers

    photographersNode.forEach((photographer) => {
      const photographerName = photographer.name;
      const photographerId = photographer.id;
      const photographerCity = photographer.city;
      const photographerCountry = photographer.country;
      const photographerTagline = photographer.tagline;
      const photographerPrice = photographer.price;
      const photographerPortrait = photographer.portrait;

      this.$photographersSection.appendChild(
        createPhotographerCard(photographerName,
                                photographerId,
                                photographerCity,
                                photographerCountry,
                                photographerTagline,
                                photographerPrice,
                                photographerPortrait
                              )
      );
    });
  }
}

const home = new HomePhotographers()
home.main()
