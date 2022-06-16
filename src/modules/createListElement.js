import leagues from './leagues.js';

const listContainer = document.getElementById('ranking');

const createListElement = (name, score, league) => {
  const listElement = document.createElement('li');
  listElement.classList.add('list-container__list-ranking-element');
  listElement.innerHTML = `
  <span class="list-container__list-ranking-element-name">${name}</span>
  <span class="list-container__list-ranking-element-score">${score}</span>
  <span class="list-container__list-ranking-element-league">${league}</span>
  </li>`;
  listContainer.appendChild(listElement);
};

const leagueTrack = (score) => {
  for (let i = 0; i < leagues.length; i++) {
    if (score < leagues[i].maxScore) {
      return leagues[i].name + ' ' + `<span class="league-icon-span"><img class="league-icon" src="${leagues[i].icon}"><span>`;
    }
  }
}

const submitButton = document.getElementById('submit-score');

const scoreSubmission = () => {
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('name');
    const score = document.getElementById('score');
    createListElement(name.value, score.value, leagueTrack(score.value));
    name.value = '';
    score.value = '';
  });
};

export default scoreSubmission;