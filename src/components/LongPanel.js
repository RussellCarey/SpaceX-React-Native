import React from "react";
import styled from "styled-components";
import { theme } from "../../infastructure/theme/MyTheme";

const Area = styled.View`
height: 200px;
width: 300px
margin-right: ${theme.space.medium}
background-color: ${theme.colors.bg.secondary}
border-radius: 20px
   justify-content: flex-end;
       box-shadow: 0 0px 10px rgba(255,255,255, .05);
       z-index: 100;
`;

const Title = styled.Text`
    color: ${theme.colors.text.primary}
    font-size: ${theme.fontSizes.body}
    margin-left: ${theme.sizes.small}
`;

const Subtitle = styled.Text`
    color: ${theme.colors.text.primary}
    font-size: ${theme.fontSizes.caption}
    margin-left: ${theme.sizes.small};
    margin-bottom: ${theme.sizes.small}
    padding-right: ${theme.sizes.small}
`;

const Date = styled.Text`
    color: ${theme.colors.text.secondary}
    font-size: ${theme.fontSizes.caption}
    margin-left: ${theme.sizes.small};
`;

const TextArea = styled.View``;

const BackgroundImage = styled.Image`
  opacity: 0.5;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 20px;
`;

export default function LongPanel({
  image,
  title,
  subtitle,
  date,
  isPatch,
  isClear,
}) {
  const sub =
    subtitle && subtitle.length > 100
      ? subtitle.slice(0, 100) + "..."
      : subtitle;

  return (
    <Area>
      <BackgroundImage
        style={isClear ? { opacity: "100%" } : null}
        resizeMode={isPatch ? "contain" : "cover"}
        defaultSource={require("../../assets/adaptive-icon.png")}
        source={{
          uri: image,
        }}
      />
      <TextArea>
        <Title>{title ? title : null}</Title>
        {date ? <Date>{date}</Date> : null}
        <Subtitle>{sub ? sub : null}</Subtitle>
      </TextArea>
    </Area>
  );
}
