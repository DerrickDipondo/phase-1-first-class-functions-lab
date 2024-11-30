// Code your solution in this file!
const returnFirstTwoDrivers = function() {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    const firstTwoDrivers = drivers.slice(0, 2);
    console.log(firstTwoDrivers);
    return firstTwoDrivers;
}

// This function should return the last two drivers
const returnLastTwoDrivers = function() {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    const lastTwoDrivers = drivers.slice(-2);
    console.log(lastTwoDrivers);
    return lastTwoDrivers;
}

//Invoking functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
returnFirstTwoDrivers();
returnLastTwoDrivers();

//Higher-Order function
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, driversToReturn) {
    return driversToReturn(drivers)
}
