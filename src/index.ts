import { adjectiveList } from './adjectives';
import { animaList } from './animals';
import { colorList } from './colors';

export const GenerateRandomName = (formatter?: (data: string[]) => string, amountAdjectives: number = 2): string => {
  if (!formatter) {
    formatter = FormatKebabCase;
  }

  const result = [];
  for (let i = 0; i < amountAdjectives; i++) {
    result.push(GetRandom(adjectiveList));
  }
  result.push(GetRandom(colorList));
  result.push(GetRandom(animaList));
  return formatter(result);
};

const GetRandom = (data: string[]): string => {
  return data[Math.floor(Math.random() * data.length)];
};

const FormatKebabCase = (data: string[]): string => {
  return data.join('-').replace(/\s/, '-').toLowerCase();
};

export default GenerateRandomName;
