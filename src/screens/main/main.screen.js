import React, { useEffect, useContext } from "react";
import { Pressable } from "react-native";

import { createStackNavigator, useNavigation } from "@react-navigation/stack";

import LaunchContext from "../../context/launchContext/launchContext";
import DataContext from "../../context/dataContext/DataContext";

import LongPanel from "../../components/LongPanel";
import SquarePanel from "../../components/SquarePanel";

import { convertUnix, findRocket } from "../../utils/helpers";
import { rockets } from "../../data/rockets";

// Styles in another file
import {
  LaunchAreas,
  TopTitle,
  Title,
  MainScroll,
  SafeArea,
} from "./main.styled.js";

export const MainScreen = ({ navigation }) => {
  const launchContext = useContext(LaunchContext);
  const {
    GetNextLaunchData,
    GetFutureLaunchData,
    GetPastLaunchData,
    GetLatestLaunchData,
    newestLaunchData,
    futureLaunchData,
    pastLaunchData,
    latestLaunchData,
  } = launchContext;

  const dataContext = useContext(DataContext);
  const { GetStartingMainDataSets, mainData } = dataContext;

  useEffect(() => {
    GetLatestLaunchData();
    GetNextLaunchData();
    GetFutureLaunchData();
    GetPastLaunchData();
  }, []);

  const handlePress = (target, data) => {
    navigation.navigate(target, { data: data });
  };

  return (
    <SafeArea>
      <MainScroll showsVerticalScrollIndicator={false}>
        <TopTitle>{"Explore"}</TopTitle>
        <LaunchAreas horizontal={true} showsHorizontalScrollIndicator={false}>
          <Pressable onPress={() => handlePress("rockets")}>
            <SquarePanel text={"Rockets"} image={rockets[3].flickr_images[0]} />
          </Pressable>
          <SquarePanel
            text={"Capsules"}
            image={
              "https://thehill.com/sites/default/files/styles/thumb_small_article/public/spacexcapsule.jpg"
            }
          />
          <SquarePanel text={"Moobly"} />
        </LaunchAreas>

        <Title>Latest Launch</Title>
        <LaunchAreas horizontal={true} showsHorizontalScrollIndicator={false}>
          <Pressable
            onPress={() => handlePress("single-launch", latestLaunchData)}
          >
            <LongPanel
              title={latestLaunchData.name || "title"}
              subtitle={latestLaunchData.details}
              image={
                latestLaunchData.links
                  ? latestLaunchData.links.flickr.original[0]
                  : ""
              }
              data={latestLaunchData}
            />
          </Pressable>
        </LaunchAreas>

        <Title>Future Launches</Title>
        <LaunchAreas horizontal={true} showsHorizontalScrollIndicator={false}>
          {futureLaunchData ? (
            futureLaunchData.map((launch, ind) => {
              return (
                <LongPanel
                  key={launch.id}
                  title={launch.name}
                  subtitle={findRocket(launch.rocket).name}
                  image={launch.links.patch.small}
                  date={convertUnix(launch.date_unix)}
                  isPatch={true}
                />
              );
            })
          ) : (
            <LongPanel></LongPanel>
          )}
        </LaunchAreas>

        <Title>Past Launches</Title>
        <LaunchAreas horizontal={true} showsHorizontalScrollIndicator={false}>
          {pastLaunchData ? (
            pastLaunchData.map((launch) => {
              return (
                <Pressable onPress={() => handlePress("single-launch", launch)}>
                  <LongPanel
                    key={launch.id}
                    title={launch.name}
                    subtitle={findRocket(launch.rocket).name}
                    image={launch.links.patch.small}
                    date={convertUnix(launch.date_unix)}
                    isPatch={true}
                  />
                </Pressable>
              );
            })
          ) : (
            <LongPanel title={"none"}></LongPanel>
          )}
        </LaunchAreas>
      </MainScroll>
    </SafeArea>
  );
};
