import { getScores } from './leaderboardAPI.js';
import { createListElement, leagueTrack } from './createListElement.js';

const refreshBtn = document.getElementById('refresh-btn');
const listContainer = document.getElementById('ranking');

const refreshPage = () => {
  refreshBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    listContainer.innerHTML = `            
    <li class="list-container__list-ranking-element--static">
    <span class="list-container__list-ranking-element-name"
      >Name</span
    >
    <span class="list-container__list-ranking-element-score"
      >Score</span
    >
    <span class="list-container__list-ranking-element-league"
      >League</span
    >`;
    const scoreData = await getScores();
    scoreData.forEach((element) => {
      createListElement(element.user, element.score, leagueTrack(element.score));
    });
  });
};

export default refreshPage;