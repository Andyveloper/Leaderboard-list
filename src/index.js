import './main.scss';

import scoreSubmission from './modules/createListElement.js';

import populate from './modules/leaderboardAPI.js';
import { getScores } from './modules/leaderboardAPI.js';
scoreSubmission();

populate();

getScores();
