import React from "react";
import { Text, View, StyleSheet } from "react-native";
import useDetailsInfo from "../hooks/detailsInfo";

 
export default function AsteroidDetails({ selectedDate, data }) {
    const { biggest, closest, brightest, hazarousCount } = useDetailsInfo(data);

return (
    <>
    <View>
        <Text>Summary of Nearby Asteroids on {selectedDate}</Text>
        <Text>The biggest asteroid on this day is {biggest.biggest} with a diameter of {biggest.diameter.toFixed(0)} feet.</Text>
        <Text>The closest asteroid is {closest.closest}. It is {Number(closest.distance).toFixed(0)} miles away!</Text>
        <Text>The birghtest asteroid in the sky is {brightest.brightest} with a magnitude of {brightest.magnitude}.</Text>
        <Text>There are {hazarousCount.count} hazardous asteroids nearby on this day!</Text>
    </View>
    </>
)
}


  const styles = StyleSheet.create({
    detailsContainer: {
        flex: 1,
        flexDirection: "column",
        borderWidth: 3,
        borderRadius: 10,
        borderColor: 'rgb(86,135,159)',
        padding: 5,
    }
  })
