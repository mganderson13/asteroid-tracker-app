import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

 
const AsteroidDisplay = ({item}) => (
    <>
    <View style={styles.asteroidContainer} >
    <Text style={styles.asteroidText}>Name: {item.name}</Text>
    <Text style={styles.asteroidText}>Diameter: {item.estimated_diameter.feet.estimated_diameter_max.toFixed(3)} feet</Text>
    <Text style={styles.asteroidText}>Velocity: {item.close_approach_data[0].relative_velocity.miles_per_hour.slice(0, 9)} mph</Text>
    <Text style={styles.asteroidText}>Miss distance: {item.close_approach_data[0].miss_distance.miles.slice(0, 12)} miles</Text>
    {item.is_potentially_hazardous_asteroid ? 
    <Text style={styles.asteroidText}>Potentially Hazardous! 😨</Text>
    : <View style={styles.notHazardousContainer}><Text style={styles.asteroidText}>Not Hazardous</Text>
    <Image source={require('../../assets/images/blueCheckImage.png')} resizeMode="contain" style={styles.notHazardousImage}/>
    </View>}
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
    },
    notHazardousContainer: {
        flex: 1,
        flexDirection: 'row',
    }, 
    notHazardousImage: {
        width: 20,
        height: 20,
        marginLeft: 3,
    }
  })

  export default AsteroidDisplay;