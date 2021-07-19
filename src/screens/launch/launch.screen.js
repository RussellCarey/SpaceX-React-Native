import React, { Fragment } from "react";
import { Text } from "react-native";
import { rockets } from "../../data/rockets";

import LongPanel from "../../components/LongPanel";
import BackHeader from "../../components/BackHeader";
import TextButton from "../../components/TextButton";

import { convertUnix } from "../../utils/helpers";

// Styles in another file
import {
  Container,
  Title,
  Subtitle,
  MainScroll,
  SafeArea,
  LaunchAreas,
  Date,
  LinkContainer,
  ArticleTitle,
} from "../../components/styled/main.styled";

export const SingleLaunchScreen = ({ navigation, route }) => {
  const { data } = route.params;
  if (!data) navigation.goBack();
  console.log(data);
  return (
    <SafeArea>
      <Container>
        <MainScroll>
          <BackHeader title={"Available Information"} />
          {data.links.flickr.original.length > 0 ? (
            <Fragment>
              <Title>Images</Title>
              <LaunchAreas
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {data.links.flickr.original.map((img, ind) => {
                  return (
                    <LongPanel
                      key={img + ind}
                      image={img}
                      isPatch={false}
                      isClear={true}
                    />
                  );
                })}
              </LaunchAreas>
            </Fragment>
          ) : null}
          <LinkContainer>
            {data.links.webcast && (
              <TextButton text={"See on youtube"} link={data.links.webcast} />
            )}
            {data.links.article && (
              <TextButton text={"Read the article"} link={data.links.article} />
            )}
          </LinkContainer>
          <ArticleTitle>{data.name}</ArticleTitle>
          <Date>{convertUnix(data.date_unix)}</Date>
          <Title>{data.details}</Title>
        </MainScroll>
      </Container>
    </SafeArea>
  );
};
