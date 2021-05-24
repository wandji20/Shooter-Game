
import { getPlayers, postPlayer, getData } from './../Score/score'

jest.mock('./../Score/score')

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dyuOo2a4JQFxlzJCOAvy/scores';

const fakeData = [
  { user: 'sugar', score: 90 },
  { score: 25, user: 'sugar' },
  { user: 'wandji', score: 10 },
  { score: 80, user: 'sugar' },
  { score: 15, user: 'test player' },
  { user: 'test player', score: 30 },
  { user: 'test player', score: 10 },
  { user: 'test player', score: 40 },
  { score: 40, user: 'dfg' },
  { user: 'wandji', score: 5 },
  { user: 'sugar', score: 25 },
  { user: 'dfg', score: 10 },
  { user: 'sugar', score: 30 },
  { user: 'test player', score: 15 },
  { user: 'test player', score: 50 },
  { score: 5, user: 'test player' },
  { score: 5, user: 'sugar' },
  { user: 'sugar', score: 40 },
  { score: 15, user: 'sugar' },
  { score: 80, user: 'sugar' },
  { user: 'wandji', score: 10 },
  { user: 'wandji', score: 35 },
  { user: 'wandji', score: 5 },
  { score: 15, user: 'sugar' },
  { score: 5, user: 'sugar' },
  { score: 5, user: 'wandji' },
  { user: 'sugar', score: 87 },
  { score: 10, user: 'test player' },
  { score: 15, user: 'wandji' },
  { score: 158, user: 'sugar' },
  { score: 40, user: 'test player' },
  { user: 'sugar', score: 15 },
  { user: 'test player', score: 25 },
  { score: 30, user: 'sugar' },
  { score: 5, user: 'sugar' },
  { user: 'wandji', score: 10 },
  { score: 50, user: 'mkkk' },
  { score: 10, user: 'test player' },
  { user: 'wandji', score: 35 },
  { score: 5, user: 'test player' },
  { score: 10, user: 'sugar' },
  { score: 55, user: 'wandji' },
  { score: 10, user: 'test player' },
  { score: 5, user: 'sugar' },
  { score: 10, user: 'wandji' },
  { score: 20, user: 'test player' },
  { user: 'test player', score: 45 },
  { user: 'wandji', score: '0' },
  { score: 10, user: 'wandji' },

]

const feedback = { result: 'Leaderboard score created correctly.' }

getData.mockResolvedValue(fakeData)
postPlayer.mockResolvedValue(feedback)



test('the data is array', async () => {
  const data = await getData(url);
  expect(data).toEqual(fakeData);
});


test('Post player score to API', async () => {
  const data = await postPlayer(url, {"score": 150, "user": "sugar"} );
  expect(data).toEqual({ result: 'Leaderboard score created correctly.' });
});
















