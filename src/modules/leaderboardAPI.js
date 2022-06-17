
async function createGame() {
  const requestURL = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/";

  const response = await fetch(requestURL, {
    method: 'POST',
    body: JSON.stringify({
      name: 'StarCraft 2',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const id = await response.json();
  return id.result;
}

export default createGame;


export async function getScores() {
  const requestURL = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Q1nwStE9fd5v5Jo7eSCd/scores/";

  const response = await fetch(requestURL, {
    method: 'GET',
  });
  const id = await response.json();
  return id.result;
}

export async function addScore(user, score) {
  const requestURL = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Q1nwStE9fd5v5Jo7eSCd/scores/";

  const response = await fetch(requestURL, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const id = await response.json();
  alert(id.result);
  return id.result;
}