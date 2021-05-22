const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dyuOo2a4JQFxlzJCOAvy/scores';

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
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

export { getData, postData };