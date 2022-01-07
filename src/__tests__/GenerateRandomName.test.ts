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

test('Modify adjectives', () => {
  const adjectiveCount = (data: string[]): string => {
    return 'length' + data.length;
  };
  expect(GenerateRandomName(adjectiveCount, 2)).toBe('length4');
  expect(GenerateRandomName(adjectiveCount, 0)).toBe('length2');
  expect(GenerateRandomName(adjectiveCount, -2)).toBe('length2');
  expect(GenerateRandomName(adjectiveCount, 5)).toBe('length7');
});
