# Random Animal Name Generator

This simple tool just generates a random animal name following this structure: `[emotion/feeling adjective]-[emotion/feeling adjective]-[color]-[animal]`. For example: `happy-crazy-yellow-cow`.

Perfect if you need to generate random usernames or other random needs.

Attention: This is not at all cryptographically or security safe, it uses basic JS Random methods.
There are in total  16.873.627(233*521*139) possible combinations.

# How to use
Import the package:

`yarn add js-random-animal-name-generator`

or

`npm install js-random-animal-name-generator`

and then just invoke the method:

```
import GenerateRandomName from 'js-random-animal-name-generator' 
const randomAnimalName = GenerateRandomName();
```


# Formatting
By default, it applies lower case and kebab case. You can pass as a parameter to GenerateRandomName() a custom formatter function that receives an array of string (the adjectives + the animal name, in order) and returns a string:

`formatter?: (data: string[]) => string`

If no formatter is passed, the default formatting applies

# Number of adjectives

`GenerateRandomName` accepts a second parameter which defines the amount of adjectives (without counting color) it should have. Default value is 2.

# Examples

### No adjectives, only color and animal

`const randomAnimalName = GenerateRandomName(undefined,0)` (0 or any number below 0 has the same effect)

### 3 adjectives, default formatter

`const randomAnimalName = GenerateRandomName(undefined,0)`

### 2 adjectives, default formatter

`const randomAnimalName = GenerateRandomName()` (default values)

### Custom formatter, 1 adjective

```
const customFormatter = (data:string[]):string => {
    return data.join("_");
}
const randomAnimalName = GenerateRandomName(customFormatter,1)
```

# Resources

Followed the following guide to quickly set up this project and publish the package: `https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c`
