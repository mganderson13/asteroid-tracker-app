import React, { useState } from "react";
import { Text, View, ActivityIndicator, FlatList } from "react-native";
import AsteroidDisplay from "./components/AsteroidListCard";
import useNasaApi from "./api/nasaApi";

export default function Index() {
  let currentDate = new Date().toJSON().slice(0, 10);
  console.log("current Date:", currentDate);
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const { data, isLoading } = useNasaApi(selectedDate);
  console.log("data from imported function:", data);

  const renderItem = ({item}) => {
    return (
      <AsteroidDisplay item={item}/>
    )
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Marianne's Asteroid App</Text>
      {isLoading ? (
      <ActivityIndicator />
    ) : (
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={item=> item.id}
      />
    )}
    </View>
  );
}
