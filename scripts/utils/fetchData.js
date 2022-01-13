class DataFetcher {
  constructor(url){
    this._url = url
  }

  async get(){
    // get() retourne le json fetched
    return fetch(this._url)
      .then(res => res.json())
      .catch(err => console.log("Données source non récupérées: ", err))
  }
}

class PhotographersData extends DataFetcher{
  constructor(url){
    // super copie le constructor du parent (DataFetcher)
    super(url)
  }

  async getPhotographers(){
    // Attend que la fonction get retourne les données
    return await this.get();
  }
}
