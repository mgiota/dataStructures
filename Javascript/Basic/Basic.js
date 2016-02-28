exports = module.exports = {};

exports.currentDay = function() {
  var today = new Date(),
      day = today.getDay(),
      daysList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return daysList[day];
};

exports.currentDate = function() {
  var today = new Date(),
      day = today.getDate(),
      month = today.getMonth() + 1,
      year = today.getFullYear();

  if(day < 10) {
    day = '0' + day;
  }

  if(month < 10) {
    month = '0' + month;
  }

  today = day + '-' + month + '-' + year;

  return today;
};