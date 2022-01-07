import { adjectiveList } from './adjectives';
import { animaList } from './animals';

export const GenerateRandomName = (formatter?: (data: string[]) => string): string => {
  if (!formatter) {
    formatter = FormatKebabCase;
  }
  const adjective = GetRandom(adjectiveList);
  const color = GetRandom(adjectiveList);
  const animal = GetRandom(animaList);
  return formatter([adjective, color, animal]);
};

const GetRandom = (data: string[]): string => {
  return data[Math.floor(Math.random() * data.length)];
};

const FormatKebabCase = (data: string[]): string => {
  return data.join('-').replace(' ', '-');
};

export default GenerateRandomName;
