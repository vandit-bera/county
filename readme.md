# County

County is a simple JavaScript library that provides functionality for working with state-wise county names in the United States.

## Installation

You can install the County Library via npm:

```bash
npm install county
```

# Usage

## Importing the Library

```javascript
const countyLibrary = require("county");
```

## Getting All States

```javascript
const states = countyLibrary.getAllStates();
console.log(states);
// Output: ["Alabama", "Alaska", /* Other states */]
```

## Getting Counties by State

```javascript
const counties = countyLibrary.getCountiesByState("Alabama");
console.log(counties);
// Output: ["Autauga", "Baldwin", "Barbour", /* Other counties in Alabama */]
```

## Searching Counties

```javascript
const matchingCounties = countyLibrary.searchCounties("lake");
console.log(matchingCounties);
// Output: ["Lake", "Lake and Peninsula", /* Other matching counties */]
```

# License

- This project is licensed under the MIT License - see the LICENSE file for details.
