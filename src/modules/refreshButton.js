import { getScores } from "./leaderboardAPI.js";
import { createListElement, leagueTrack } from "./createListElement.js";

const refreshBtn = document.getElementById('refresh-btn');
const listContainer = document.getElementById('ranking');

const refreshPage = () => {
  refreshBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    listContainer.innerHTML = '';
      const scoreData = await getScores();
    scoreData.forEach((element) => {
      createListElement(element.user, element.score, leagueTrack(element.score));
    });
  });
  return scoreData;
}


export default refreshPage;