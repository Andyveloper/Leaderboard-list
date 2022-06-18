import './main.scss';

import scoreSubmission from './modules/createListElement.js';

import createGame from './modules/leaderboardAPI.js';
import refreshPage from './modules/refreshButton.js';

scoreSubmission();

createGame();

refreshPage();
