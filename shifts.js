function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hoursWorked, hourlyRate) {
  return Math.round(hoursWorked * hourlyRate);
}

module.exports = { isValidShift, calculatePay };
