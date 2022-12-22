// d: days
// h: hours
// m: minutes

// getMinuteFromDaysHours accept date in format 1d 1h 1m.
// Accepts only strings
export const getMinuteFromDaysHours = (time = "") => {
  var num = 0;
  if (typeof time === "string" || time instanceof String) {
    if (time.toString().length >= 1) {
      var regex = /[a-zA-Z]/;
      !regex.test(time.toString()) && (time = time.toString() + "m");
    }
    time = time.toString().toLowerCase();
    if (
      time.toString().includes("d") ||
      time.toString().includes("h") ||
      time.toString().includes("m")
    ) {
      var timeWithAddedSpace = "";
      time.split("").map((item) => {
        if (item === "d") timeWithAddedSpace = timeWithAddedSpace + item + " ";
        else if (item === "h")
          timeWithAddedSpace = timeWithAddedSpace + item + " ";
        else if (item === "m")
          timeWithAddedSpace = timeWithAddedSpace + item + " ";
        else timeWithAddedSpace = timeWithAddedSpace + item;
        return timeWithAddedSpace;
      });
      timeWithAddedSpace.split(" ").map((item) => {
        if (item.includes("d"))
          num = num + Number(item.replace("d", "")) * (60 * 24);
        else if (item.includes("h"))
          num = num + Number(item.replace("h", "")) * 60;
        else if (item.includes("m")) num = num + Number(item.replace("m", ""));
        return num;
      });
    }
    return num;
  }
};

// getDaysHoursFromMinute convert any number to 1d 1h 1m format, 1d being 8h
export const getDaysHoursFromMinute = (time) => {
  var d = Math.floor(time / 1440);
  var h = Math.floor((time - d * 1440) / 60);
  var m = Math.floor(time % 60);

  var dDisplay = d > 0 ? d + "d " : "";
  var hDisplay = h > 0 ? h + "h " : "";
  var mDisplay = m > 0 ? m + "m" : "";
  return dDisplay + hDisplay + mDisplay;
};
