import React from "react";
import { Text } from "react-native";

const AsteroidDisplay = ({item}) => (
    <>
    <Text>Name: {item.name}</Text>
    <Text>Diameter: {item.estimated_diameter.feet.estimated_diameter_min}-
    {item.estimated_diameter.feet.estimated_diameter_max} feet</Text>
    <Text>Velocity: {item.close_approach_data.relative_velocity.miles_per_hour}mph</Text>
    <Text>{item.is_potentially_hazardous_asteroid ? 
    "This asteroid is potentially hazardous!" 
    : "This asteroid is not hazardous"}</Text>
    <Text>Miss distance: {item.close_approach_data.miss_distance.miles} miles</Text>
    </>
  )

  export default AsteroidDisplay;