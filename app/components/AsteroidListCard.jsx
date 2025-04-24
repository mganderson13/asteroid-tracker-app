import React from "react";
import { Text, View, StyleSheet } from "react-native";

 
const AsteroidDisplay = ({item}) => (
    <>
    <View style={styles.asteroidContainer} >
    <Text style={styles.asteroidText}>Name: {item.name}</Text>
    <Text style={styles.asteroidText}>Diameter: {item.estimated_diameter.feet.estimated_diameter_max.toFixed(3)} feet</Text>
    <Text style={styles.asteroidText}>Velocity: {item.close_approach_data[0].relative_velocity.miles_per_hour.slice(0, 9)} mph</Text>
    <Text style={styles.asteroidText}>Miss distance: {item.close_approach_data[0].miss_distance.miles.slice(0, 12)} miles</Text>
    <Text style={styles.asteroidText}>{item.is_potentially_hazardous_asteroid ? 
    "This asteroid is potentially hazardous!" 
    : "This asteroid is not hazardous"}</Text>
    </View>
    </>
  );

  const styles = StyleSheet.create({
    asteroidContainer: {
        borderWidth: 3,
        borderRadius: 5,
        borderColor: 'rgb(86,135,159)',
        backgroundColor: 'white',
        padding: 5,
        marginBottom: 5,
        width: '100%',
    },
    asteroidText: {
        fontSize: 21,
    }
  })

  export default AsteroidDisplay;