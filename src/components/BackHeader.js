import React from "react";
import { View, Text, Pressable } from "react-native";
import { StackActions, useNavigation } from "@react-navigation/native";

import styled from "styled-components";
import { theme } from "../../infastructure/theme/MyTheme";

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${theme.space.small};
`;

export const BackButton = styled.Text`
  color: ${theme.colors.text.primary};
  font-size: ${theme.fontSizes.title};
  margin-left: ${theme.space.medium};
  margin-bottom: ${theme.space.small};
`;

export const Title = styled.Text`
  color: ${theme.colors.text.primary};
  font-size: ${theme.fontSizes.title};
  margin-right: ${theme.space.medium};
  margin-bottom: ${theme.space.small};
`;

export default function BackHeader({ title }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.dispatch(StackActions.pop(1));
  };

  return (
    <Header>
      <Pressable onPress={() => handlePress()}>
        <BackButton>Back</BackButton>
      </Pressable>
      <Title>{title}</Title>
    </Header>
  );
}
