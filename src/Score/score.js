function updateScore(enemy, score){

}


// For creating the game 


let url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dyuOo2a4JQFxlzJCOAvy/scores'
let data = {name: 'Shooter Game'}
// let otherParams = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8"
//   },
//   mode: 'no-cors',
//   body: JSON.stringify(data),
// }

// gameId = dyuOo2a4JQFxlzJCOAvy NosIbGwhhnEPkq9KZLfj


// fetch(url, {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });
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
  })

  const feedback = await response.json()
  return feedback

}






export {getData, postData}