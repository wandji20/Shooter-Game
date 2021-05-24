// const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/oe56SVK7YnY8Ch9Y2fz/scores';
// oe56SVK7YnY8Ch9Y2fz
// const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dyuOo2a4JQFxlzJCOAvy/scores';

const getData = async (url) => {
  try{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    const list  = getFilteredList(data.result)
    return list;
  }catch(error){
    console.log(error)
    return error
  }
}

getData(url)

const postData = async (url, data) => {
  try{
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    const feedback = await response.json();
    console.log(feedback)
    return feedback;
  }catch(error){
    console.log(error)
    return error
  }
}
// postData(url, {name: 'Shooting Game'})

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