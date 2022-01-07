import GenerateRandomName from '../index';

test('It works', () => {
  const randomName = GenerateRandomName();
  expect(randomName).toMatch(/^[a-z-]+$/);
});

test('Custom formatter', () => {
  const allUpperCase = (data: string[]): string => {
    return data.join('').replace(' ', '').toUpperCase();
  };
  expect(GenerateRandomName(allUpperCase)).toMatch(/[A-Z]/);
});
