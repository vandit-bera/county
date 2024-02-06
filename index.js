// countyLibrary.js
const countyData = require("./constant.js");

function getCountiesByState(state) {
  return countyData[state] || [];
}

function getAllStates() {
  return Object.keys(countyData);
}

function searchCounties(query) {
  const matchingCounties = [];
  Object.values(countyData).forEach((counties) => {
    counties.forEach((county) => {
      if (county.toLowerCase().includes(query.toLowerCase())) {
        matchingCounties.push(county);
      }
    });
  });
  return matchingCounties;
}

module.exports = {
  getCountiesByState,
  getAllStates,
  searchCounties,
};
