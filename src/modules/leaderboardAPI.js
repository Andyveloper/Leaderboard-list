
async function populate() {
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

export default populate;


export async function getScores() {
  const requestURL = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Q1nwStE9fd5v5Jo7eSCd/scores/";

  const response = await fetch(requestURL, {
    method: 'GET',
  });
  const id = await response.json();
  console.log(id.result);
  return id.result;
}

async function addScore() {
  const requestURL = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Q1nwStE9fd5v5Jo7eSCd/scores/";

  const response = await fetch(requestURL, {
    method: 'POST',
    body: JSON.stringify({
      user: user.value,
      score: score.value
    }),
  })
}