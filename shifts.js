function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hoursWorked, hourlyRate) {
  const regularHours = Math.min(hoursWorked, 8);
  const overtimeHours = Math.max(hoursWorked - 8, 0);
  return regularHours * hourlyRate + overtimeHours * hourlyRate * 1.5;
}
module.exports = { isValidShift, calculatePay };
