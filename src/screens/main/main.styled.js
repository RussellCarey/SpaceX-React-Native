import styled from "styled-components";
import { theme } from "../../../infastructure/theme/MyTheme";

export const LaunchAreas = styled.ScrollView`
  height: 220px;
  flex-direction: row;
  padding-left: ${theme.space.small};
  margin-bottom: ${theme.space.medium};
`;

export const TopTitle = styled.Text`
  color: ${theme.colors.text.primary};
  font-size: ${theme.fontSizes.title};
  margin-top: ${theme.space.medium};
  margin-left: ${theme.space.medium};
  margin-bottom: ${theme.space.small};
`;

export const Title = styled.Text`
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
