import { SET_MAIN_DATA } from "./types";

import React, { useReducer } from "react";
import DataContext from "./DataContext";
import DataReducer from "./DataReducer";

import axios from "axios";
import { GetAll, GetRocketName } from "../../utils/FetchAPI";

const DataState = (props) => {
  const initialState = {
    newest: [],
    pastLaunches: [],
    futureLaunches: [],
  };

  const [dataState, dataDispatch] = useReducer(DataReducer, initialState);

  // Get next launch data and set it in the state..
  const GetStartingMainDataSets = async () => {
    const allData = {};
    const rockets = await GetAll("rockets");

    allData.rockets = rockets;

    dataDispatch({
      type: SET_MAIN_DATA,
      payload: allData,
    });
  };

  //! Returns the provider with its value - then props.children is just anything else added in betweem.
  return (
    <DataContext.Provider
      value={{
        GetStartingMainDataSets,
        mainData: dataState,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
