import React, { useEffect, useContext } from "react";
import { Pressable, Text } from "react-native";

import { rockets } from "../../data/rockets";
import { createStackNavigator, useNavigation } from "@react-navigation/stack";

import ItemPanel from "../../components/ItemPanel";
import BackHeader from "../../components/BackHeader";

// Styles in another file
import {
  Container,
  Title,
  MainScroll,
  SafeArea,
  Header,
  BackButton,
} from "../../components/styled/main.styled";

export const SingleRocketScreen = ({ navigation, route }) => {
  const { data } = route.params;
  console.log(data);
  if (!data) navigation.goBack();

  const handlePress = (target) => {
    navigation.navigate(target);
  };

  return (
    <SafeArea>
      <BackHeader />
      <Text>
        THIS IS A PAGE FOR AR OCKETTHIS IS A PAGE FOR AR OCKETTHIS IS A PAGE FOR
        AR OCKET THIS IS A PAGE FOR AR OCKET THIS IS A PAGE FOR AR OCKET THIS IS
        A PAGE FOR AR OCKET THIS IS A PAGE FOR AR OCKET THIS IS A PAGE FOR AR
        OCKET THIS IS A PAGE FOR AR OCKET THIS IS A PAGE FOR AR OCKET THIS IS A
        PAGE FOR AR OCKET
      </Text>
    </SafeArea>
  );
};
