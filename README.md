# Random Animal Name Generator

This simple tool just generates a random animal name following this structure: `[emotion/feeling adjective]-[color]-[animal]`. For example: `happy-yellow-cow`

# How to use
Import the package:

`yarn add random-animal-name-generator`

or

`npm install random-animal-name-generator`

and then just invoke the method:

```
import GenerateRandomName from 'random-animal-name-generator' 
const randomAnimalName = GenerateRandomName();
```


# Formatting
By default, it applies lower case and kebab case. You can pass as a parameter to GenerateRandomName() a custom formatter function that receives an array of string (the adjectives + the animal name, in order) and returns a string:
`formatter?: (data: string[]) => string`
If no formatter is passed, the default formatting applies