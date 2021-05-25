import 'jest-canvas-mock';
import Player from '../Entities/Player';

jest.mock('./../Entities/Player');

beforeEach(() => {
  Player.mockClear();
});

test('Creating an instance of the Player , and calling class Player', () => {
  new Player('GameScene', 240, 579, 'player'); // eslint-disable-line no-new
  expect(Player).toHaveBeenCalledTimes(1);
});

test('Creating an instance of the Player , and calling class Player', () => {
  new Player('GameScene', 240, 579, 'player'); // eslint-disable-line no-new
  expect(Player).not.toHaveBeenCalledTimes(0);
});

test('Player is calling explode method', () => {
  const player = new Player('GameScene', 240, 579, 'player');
  player.explode(false);
  expect(player.explode).toHaveBeenCalledTimes(1);
});

test('Player is calling explode method', () => {
  const player = new Player('GameScene', 240, 579, 'player');
  player.explode(false);
  expect(player.explode).not.toHaveBeenCalledTimes(0);
});