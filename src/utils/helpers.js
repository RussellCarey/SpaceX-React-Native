import { rockets } from "../data/rockets";

export const convertUnix = (unix) => {
  const unixTime = unix * 1000;
  const dateObject = new Date(unixTime);

  const format = dateObject.toLocaleString();
  const day = format.split(",")[0];
  return day;
};

export const findRocket = (id) => {
  const found = rockets.find((item) => item.id === id);

  if (!found) return "Rocket not found";

  return found;
};
