import {
  SET_NEWEST_LAUNCH,
  SET_FUTURE_LAUNCH,
  SET_PAST_LAUNCH,
  SET_LATEST_LAUNCH,
} from "./types";

import React, { useReducer } from "react";
import LaunchContext from "./launchContext";
import LaunchReducer from "./launchReducer";

import axios from "axios";
import { GetAll, GetRocketName } from "../../utils/FetchAPI";

const LaunchState = (props) => {
  const initialState = {
    newest: [],
    past: [],
    future: [],
    latest: [],
  };

  const [launchesState, launchesDispatch] = useReducer(
    LaunchReducer,
    initialState
  );

  // Get next launch data and set it in the state..
  const GetNextLaunchData = async () => {
    const newestData = await GetAll("launches/next");

    launchesDispatch({
      type: SET_NEWEST_LAUNCH,
      payload: newestData,
    });
  };

  const GetLatestLaunchData = async () => {
    const newestData = await GetAll("launches/latest");

    launchesDispatch({
      type: SET_LATEST_LAUNCH,
      payload: newestData,
    });
  };

  const GetFutureLaunchData = async () => {
    const newestData = await GetAll("launches/upcoming");

    launchesDispatch({
      type: SET_FUTURE_LAUNCH,
      payload: newestData,
    });
  };

  // Get next launch data and set it in the state..
  const GetPastLaunchData = async () => {
    const newestData = await GetAll("launches/past");

    launchesDispatch({
      type: SET_PAST_LAUNCH,
      payload: newestData.reverse(),
    });
  };

  //! Returns the provider with its value - then props.children is just anything else added in betweem.
  return (
    <LaunchContext.Provider
      value={{
        newestLaunchData: launchesState.newest,
        latestLaunchData: launchesState.latest,
        pastLaunchData: launchesState.past,
        futureLaunchData: launchesState.future,
        GetNextLaunchData,
        GetFutureLaunchData,
        GetPastLaunchData,
        GetLatestLaunchData,
      }}
    >
      {props.children}
    </LaunchContext.Provider>
  );
};

export default LaunchState;
