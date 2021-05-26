import 'jest-canvas-mock';
import Enemy2 from '../Entities/Enemy2';

jest.mock('./../Entities/Enemy2');

beforeEach(() => {
  Enemy2.mockClear();
});

test('Creating an instance of the Enemy2 , and calling class Enemy2', () => {
  new Enemy2('GameScene', 240, 40, 'enemy2'); // eslint-disable-line no-new
  expect(Enemy2).toHaveBeenCalledTimes(1);
});

test('Creating an instance of the Enemy2 , and calling class Enemy2', () => {
  new Enemy2('GameScene', 240, 40, 'enemy2'); // eslint-disable-line no-new
  expect(Enemy2).not.toHaveBeenCalledTimes(0);
});

test('Enemy2 is calling explode method', () => {
  const enemy = new Enemy2('GameScene', 240, 40, 'enemy2');
  enemy.explode(false);
  expect(enemy.explode).toHaveBeenCalledTimes(1);
});

test('Enemy2 is calling explode method', () => {
  const enemy = new Enemy2('GameScene', 240, 40, 'Enemy2');
  enemy.explode(false);
  expect(enemy.explode).not.toHaveBeenCalledTimes(0);
});