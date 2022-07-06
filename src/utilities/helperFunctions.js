export const convertTimeToSeconds = (input) => {
  let hrsAndMts = input.split(":");
  return hrsAndMts[0] * 3600 + hrsAndMts[1] * 60;
};

export const convertBooleanToInteger = (input) => (input ? 1 : 0);

export const convertStringToInteger = (input) => parseInt(input);
