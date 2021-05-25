import 'jest-canvas-mock';
import Enemy3 from '../Entities/Enemy3';

jest.mock('./../Entities/Enemy3');

beforeEach(() => {
  Enemy3.mockClear();
});

test('Creating an instance of the Enemy3 , and calling class Enemy3', () => {
  new Enemy3('GameScene', 240, 40, 'enemy3'); // eslint-disable-line no-new
  expect(Enemy3).toHaveBeenCalledTimes(1);
});

test('Creating an instance of the Enemy3 , and calling class Enemy3', () => {
  new Enemy3('GameScene', 240, 40, 'enemy3'); // eslint-disable-line no-new
  expect(Enemy3).not.toHaveBeenCalledTimes(0);
});

test('Enemy3 is calling explode method', () => {
  const enemy = new Enemy3('GameScene', 240, 40, 'enemy3');
  enemy.explode(false);
  expect(enemy.explode).toHaveBeenCalledTimes(1);
});

test('Enemy3 is calling explode method', () => {
  const enemy = new Enemy3('GameScene', 240, 40, 'Enemy3');
  enemy.explode(false);
  expect(enemy.explode).not.toHaveBeenCalledTimes(0);
});