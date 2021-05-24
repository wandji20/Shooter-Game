// const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dyuOo2a4JQFxlzJCOAvy/scores';

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  const list  = getFilteredList(data.result)
  return list;
}

async function postData(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const feedback = await response.json();
  return feedback;
}

const getFilteredList = (arr) =>  {
  let result = [];
  arr.forEach((player) => {
    const item = result.find((obj) => obj.user === player.user);
    if (!item) {
      result.push(player);
    } else if (item) {
      item.score = item.score > player.score ? item.score : player.score;
    }
  });
  result = result.sort((a, b) => b.score - a.score);
  return result;
}

export { getData, postData };