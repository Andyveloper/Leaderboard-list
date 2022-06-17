import leagues from './leagues.js';

import { addScore } from './leaderboardAPI.js';

const listContainer = document.getElementById('ranking');

export const createListElement = (name, score, league) => {
  const listElement = document.createElement('li');
  listElement.classList.add('list-container__list-ranking-element');
  listElement.innerHTML = `
  <span class="list-container__list-ranking-element-name">${name}</span>
  <span class="list-container__list-ranking-element-score">${score}</span>
  <span class="list-container__list-ranking-element-league">${league}</span>
  </li>`;
  listContainer.appendChild(listElement);
};

export const leagueTrack = (score) => {
  for (let i = 0; i < leagues.length; i += 1) {
    if (score < leagues[i].maxScore) {
      return `${leagues[i].name}<span class="league-icon-span"><img class="league-icon" src="${leagues[i].icon}"><span>`;
    }
  }
  return false;
};

const submitButton = document.getElementById('submit-score');

const scoreSubmission = () => {
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('name');
    const score = document.getElementById('score');
    addScore(name.value, score.value);
    createListElement(name.value, score.value, leagueTrack(score.value));
    name.value = '';
    score.value = '';
  });
};

export default scoreSubmission;