import React from "react";
import { View, Text, Button, Pressable } from "react-native";
import * as Linking from "expo-linking";

export default function TextButton({ text, link }) {
  console.log(link);
  const handleClick = () => {
    const linking = link.includes("youtu")
      ? `vnd.youtube://${link.slice(6)}`
      : link;

    Linking.canOpenURL(linking).then((supported) => {
      if (supported) {
        return Linking.openURL(linking).catch((err) => console.log(err));
      } else {
        return Linking.openURL(link).catch((err) => console.log(err));
      }
    });
  };

  return (
    <Pressable onPress={() => handleClick()}>
      <Button title={text} onPress={() => handleClick()} />
    </Pressable>
  );
}
