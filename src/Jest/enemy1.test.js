import 'jest-canvas-mock';
import Enemy1 from '../Entities/Enemy1';

jest.mock('./../Entities/Enemy1');

beforeEach(() => {
  Enemy1.mockClear();
});

test('Creating an instance of the Enemy1 , and calling class Enemy1', () => {
  new Enemy1('GameScene', 240, 40, 'enemy1'); // eslint-disable-line no-new
  expect(Enemy1).toHaveBeenCalledTimes(1);
});

test('Creating an instance of the Enemy1 , and calling class Enemy1', () => {
  new Enemy1('GameScene', 240, 40, 'enemy1'); // eslint-disable-line no-new
  expect(Enemy1).not.toHaveBeenCalledTimes(0);
});

test('Enemy1 is calling explode method', () => {
  const enemy = new Enemy1('GameScene', 240, 40, 'enemy1');
  enemy.explode(false);
  expect(enemy.explode).toHaveBeenCalledTimes(1);
});

test('Enemy1 is calling explode method', () => {
  const enemy = new Enemy1('GameScene', 240, 40, 'Enemy1');
  enemy.explode(false);
  expect(enemy.explode).not.toHaveBeenCalledTimes(0);
});