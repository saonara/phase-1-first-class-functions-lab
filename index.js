function returnFirstTwoDrivers(drivers) {
  return [drivers[0], drivers[1]];
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (fare) {
    return multiplier * fare;
  };
}

function fareDoubler(fare) {
  return fare * 2;
}

function fareTripler(fare) {
  return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers, func) {
  return func(arrayOfDrivers);
}
