import styled from "styled-components";
import { theme } from "../../../infastructure/theme/MyTheme";

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${theme.colors.text.primary};
  font-size: ${theme.fontSizes.title};
  margin-right: ${theme.space.medium};
  margin-bottom: ${theme.space.medium};
`;

export const ArticleTitle = styled.Text`
  color: ${theme.colors.text.primary};
  font-size: ${theme.fontSizes.title};
  margin-right: ${theme.space.medium};
  margin-bottom: ${theme.space.small};
`;

export const BackButton = styled.Text`
  color: ${theme.colors.text.primary};
  font-size: ${theme.fontSizes.title};
  margin-left: ${theme.space.medium};
  margin-bottom: ${theme.space.small};
`;

export const MainScroll = styled.ScrollView``;

export const SafeArea = styled.SafeAreaView`
  background-color: ${theme.colors.bg.primary};
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  padding: ${theme.space.medium};
`;

export const LaunchAreas = styled.ScrollView`
  height: 220px;
  flex-direction: row;
  padding-left: ${theme.space.small};
  margin-bottom: ${theme.space.small};
`;

export const Date = styled.Text`
    color: ${theme.colors.text.secondary}
    font-size: ${theme.fontSizes.caption}
     margin-bottom: ${theme.space.small};
`;

export const LinkContainer = styled.View`
  justify-content: space-evenly;
  flex-direction: row;
  padding-left: ${theme.space.small};
  padding-right: ${theme.space.small};
  margin-bottom: ${theme.space.medium};
`;
