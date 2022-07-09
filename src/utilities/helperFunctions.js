export const convertTimeToSeconds = (originalTime) => {
  let hrsAndMts = originalTime.split(":");
  return hrsAndMts[0] * 3600 + hrsAndMts[1] * 60;
};

export const convertSecondsToTime = (seconds) => {
  seconds = parseInt(seconds);
  let hrs = Math.floor(seconds / 3600);
  let mts = Math.floor((seconds % 3600) / 60);
  if (hrs < 10) {
    hrs = hrs.toString();
    hrs = "0" + hrs;
  } else {
    hrs = hrs.toString();
  }
  if (mts < 10) {
    mts = mts.toString();
    mts = "0" + mts;
  } else {
    mts = mts.toString();
  }
  return hrs + ":" + mts;
};

export const convertBooleanToInteger = (input) =>
  input ? parseInt(1) : parseInt(0);

export const convertIntegerToBoolean = (input) => (input === 1 ? true : false);

export const convertStringToInteger = (input) => parseInt(input);

export const convertIntegerToString = (input) => input.toString();

export const formatDate = (originalDate) => {
  let splittedDate = originalDate.split("-");
  let YYYY = splittedDate[0];
  let MM = splittedDate[1];
  let DD = splittedDate[2];
  if (parseInt(MM) < 10) {
    MM = MM.substring(1);
  }
  if (parseInt(DD) < 10) {
    DD = DD.substring(1);
  }
  return MM + "/" + DD + "/" + YYYY;
};
