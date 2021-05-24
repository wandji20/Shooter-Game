const getFilteredList = (arr) => {
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
};

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const list = getFilteredList(data.result);
    return list;
  } catch (error) {
    return error;
  }
};

const postData = async (url, data) => {
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

export { getData, postData };