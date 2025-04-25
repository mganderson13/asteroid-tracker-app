import React from "react";
import { Text, View, StyleSheet } from "react-native";
import useDetailsInfo from "../hooks/detailsInfo";

export default function AsteroidDetails({ selectedDate, data }) {

    if (!data || data.length === 0) {
        return (
            <Text>No summary available</Text>
        )
    }
    const { biggest, closest, brightest, hazarousCount } = useDetailsInfo(data);

return (
    <>
    <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>Summary of Nearby Asteroids on {selectedDate}</Text>
        <Text style={styles.detailsText}>The biggest asteroid on this day is {biggest.biggest} with a diameter of {biggest.diameter.toFixed(0)} feet.</Text>
        <Text style={styles.detailsText}>The closest asteroid is {closest.closest}. It is {Number(closest.distance).toFixed(0)} miles away!</Text>
        <Text style={styles.detailsText}>The birghtest asteroid in the sky is {brightest.brightest} with a magnitude of {brightest.magnitude}.</Text>
        <Text style={styles.detailsText}>There are {hazarousCount.count} hazardous asteroids nearby on this day!</Text>
    </View>
    </>
)
}


  const styles = StyleSheet.create({
    detailsContainer: {
        flexDirection: "column",
        borderWidth: 3,
        borderRadius: 10,
        borderColor: 'rgb(207, 226, 243)',
        backgroundColor: 'rgb(207, 226, 243)',
        padding: 5,
        margin: 10,
    },
    detailsText: {
        fontSize: 20,
        marginBottom: 3,
    }
  })
