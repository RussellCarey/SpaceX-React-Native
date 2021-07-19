import axios from "axios";

export const GetAll = async (item) => {
  try {
    const data = await axios.get(`https://api.spacexdata.com/v4/${item}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
