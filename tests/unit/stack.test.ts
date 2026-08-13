import {expect, test} from 'vitest';
import {Stack} from '../../src';

test('new stack has size 0', () => {
  const stack = new Stack<number>();

  expect(stack.size).toBe(0);
});

test('push adds a value', () => {
  const stack = new Stack<number>();

  stack.push(42);

  expect(stack.size).toBe(1);
});

test('pop returns the most recently pushed value', () => {
  const stack = new Stack<number>();

  stack.push(1);
  stack.push(2);

  expect(stack.pop()).toBe(2);
});

test('pop removes the value', () => {
  const stack = new Stack<number>();

  stack.push(99);
  stack.pop();

  expect(stack.size).toBe(0);
});

test("peek doesn't remove the value", () => {
  const stack = new Stack<number>();

  stack.push(7);

  expect(stack.peek()).toBe(7);
  expect(stack.size).toBe(1);
});

test('empty pop throws', () => {
  const stack = new Stack<number>();

  expect(() => stack.pop()).toThrow();
});

test('1024 values can be pushed', () => {
  const stack = new Stack<number>();

  for (let i = 0; i < 1024; i += 1) {
    stack.push(i);
  }

  expect(stack.size).toBe(1024);
});

test('1025th value throws', () => {
  const stack = new Stack<number>();

  for (let i = 0; i < 1024; i += 1) {
    stack.push(i);
  }

  expect(() => stack.push(1025)).toThrow();
});