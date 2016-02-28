exports = module.exports = {};

exports.currentDay = function() {
  var today = new Date(),
      day = today.getDay(),
      daysList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return daysList[day];
};