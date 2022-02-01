export const environment = {
  production: false,
  backend: {
    protocol: 'http',
    host: '127.0.0.1',
    port: '3000',
    endpoints: {
      musiqueAleatoire: '/api/musics/random',
      toutesLesMusiques: '/api/musics',
      uneMusique: '/api/musics/:id',
      filterByTitle: '/api/musics/title/:title'
    }
  }
};
