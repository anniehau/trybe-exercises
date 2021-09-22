const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

test('O retorno contém os repositórios desejados', () => {
  return getRepos('https://api.github.com/orgs/tryber/repos').then((data) => {
    const actual = data.filter((repo) => {
      return repo === 'sd-01-week4-5-project-todo-list' ||
      repo === 'sd-01-week4-5-project-meme-generator';
    })
    expect(actual.length).toBeGreaterThanOrEqual(2);
  });
})

