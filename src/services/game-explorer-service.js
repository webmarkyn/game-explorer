class GameExplorerService {
  constructor() {
    this.baseURL = 'https://api.rawg.io/api';
    this.getGames = this.getGames.bind(this);
    this.getGenres = this.getGenres.bind(this);
    this.getGame = this.getGame.bind(this);
  }

  async getService(url) {
    const request = await fetch(`${this.baseURL}/${url}`);
    // eslint-disable-next-line no-return-await
    return await request.json();
  }

  async getGames(genreId = null) {
    const url = genreId ? `games?page_size=10&genres=${genreId}` : 'games?page_size=50';
    const data = await this.getService(url);
    return data.results.map(this.transformGame);
  }

  async getGame(id) {
    const data = await this.getService(`games/${id}`);
    return this.transformGame(data);
  }

  async getGenres() {
    const data = await this.getService('genres');
    return data.results.map(this.transformGenre);
  }

  // eslint-disable-next-line class-methods-use-this
  transformGame(game) {
    const {
      id,
      name,
      background_image: backgroundImage,
      rating,
      metacritic,
      description,
      platforms,
      genres,
      tags,
    } = game;
    return {
      id,
      name,
      description,
      backgroundImage,
      rating,
      metacritic,
      platforms: platforms.map(platform => platform.platform.name),
      genres: genres.map(genre => genre.name),
      mainGenreId: genres[genres.length - 1].id,
      tags: tags.map(tag => tag.name),
    };
  }

  // eslint-disable-next-line class-methods-use-this
  transformGenre(genre) {
    const { id, name } = genre;
    return {
      id,
      name,
    };
  }
}

export default GameExplorerService;
