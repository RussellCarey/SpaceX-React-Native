import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import styled from "styled-components";
import { theme } from "../../infastructure/theme/MyTheme";

const Area = styled.View`
width: 100%;
  padding: ${theme.sizes.small}
margin-right: ${theme.space.medium}
background-color: ${theme.colors.bg.secondary}
border-radius: 20px
   justify-content: flex-end;
     margin-bottom: ${theme.space.large};
         box-shadow: 0 0px 10px rgba(255,255,255,.05);
`;

const Title = styled.Text`
    color: ${theme.colors.text.primary}
    font-size: ${theme.fontSizes.body}
      margin-bottom: ${theme.space.small};
`;

const Subtitle = styled.Text`
    color: ${theme.colors.text.primary}
    font-size: ${theme.fontSizes.caption}
`;

const ReadMore = styled.Text`
    color: ${theme.colors.text.primary}
    font-size: ${theme.fontSizes.caption}
    margin-top:  ${theme.space.medium};
    align-self: flex-end;
`;

const ImageArea = styled.View`
  flex: 1;
`;

const TextArea = styled.View`
  flex: 1;
`;

const PanelImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 20px;
  margin-bottom: ${theme.space.small};
`;

export default function ItemPanel({ name, description, image }) {
  console.log(image);
  return (
    <Area>
      <ImageArea>
        <PanelImage
          source={{
            uri: image,
          }}
        />
      </ImageArea>
      <TextArea>
        <Title>{name}</Title>
        <Subtitle>{description}</Subtitle>
        <ReadMore>Read more</ReadMore>
      </TextArea>
    </Area>
  );
}
