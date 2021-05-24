import fetch from 'node-fetch';
import sortPlayers from '../Resources/resource';

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.result;
  } catch (error) {
    return error;
  }
};

const getPlayers = async (url) => {
  const arr = await getData(url);
  let sortedPlayers = sortPlayers(arr);
  if (sortedPlayers.length > 7) {
    sortedPlayers = sortedPlayers.slice(0, 5);
  }
  return sortedPlayers;
};

const postPlayer = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const feedback = await response.json();
    return feedback;
  } catch (error) {
    return error;
  }
};

export { getPlayers, postPlayer, getData };