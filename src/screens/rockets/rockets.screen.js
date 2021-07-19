import React, { useEffect, useContext } from "react";
import { Pressable } from "react-native";
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

export const RocketsScreen = ({ navigation }) => {
  const handlePress = (target, data) => {
    navigation.navigate(target, { data: data });
  };

  return (
    <SafeArea>
      <Container>
        <BackHeader title={"Rockets"} />
        <MainScroll showsVerticalScrollIndicator={false}>
          {rockets.map((rock) => {
            return (
              <Pressable onPress={() => handlePress("single-rocket", rock)}>
                <ItemPanel
                  key={rock.id}
                  name={rock.name}
                  description={rock.description}
                  image={rock.flickr_images[0]}
                />
              </Pressable>
            );
          })}
        </MainScroll>
      </Container>
    </SafeArea>
  );
};
