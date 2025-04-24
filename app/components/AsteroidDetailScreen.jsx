import React from "react";
import { Text, View, StyleSheet } from "react-native";
import useDetailsInfo from "../hooks/detailsInfo";

 
export default function AsteroidDetails({ selectedDate }) {
    const { biggest, closest, brightest, hazarousCount } = useDetailsInfo(selectedDate);

return (
    <>
    <View>
        <Text>Summary of Asteroids on {selectedDate}</Text>
        <Text>The biggest nearby asteroid on this day is </Text>
    </View>
    </>
)
}


  const styles = StyleSheet.create({
  })
