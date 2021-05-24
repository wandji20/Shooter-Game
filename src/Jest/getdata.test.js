import { getData, postData, getFilteredList } from './../Score/score'
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dyuOo2a4JQFxlzJCOAvy/scores';


test('the data is array', async () => {
  const data = await getData(url);
  expect(Array.isArray(data)).toEqual(true);
});



