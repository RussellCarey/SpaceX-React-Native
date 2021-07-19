import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import styled from "styled-components";
import { theme } from "../../infastructure/theme/MyTheme";

const Area = styled.View`
    height: 200px;
    width: 200px;
    margin-right: ${theme.space.medium}
    background-color: ${theme.colors.bg.secondary}
    border-radius: 20px;
    justify-content: flex-end;
    box-shadow: 0 0px 10px rgba(255,255,255,.1);

`;

const Title = styled.Text`
    color: ${theme.colors.text.primary}
    font-size: ${theme.fontSizes.body}
    margin-bottom: ${theme.sizes.small}
    margin-left: ${theme.sizes.small}
`;

const BackgroundImage = styled.Image`
  opacity: 0.8;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

export default function SquarePanel({ image, text }) {
  return (
    <Area>
      <BackgroundImage
        source={{
          uri: image,
        }}
      />
      <Title>{text}</Title>
    </Area>
  );
}
