import { eventFrom, setEventFrom } from './index';

test('exports the eventFrom function', () => {
  expect(typeof eventFrom).toBe('function');
});

test('exports the setEventFrom function', () => {
  expect(typeof setEventFrom).toBe('function');
});
