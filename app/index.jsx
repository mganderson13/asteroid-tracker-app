import React, { useState } from "react";
import { Text, View, ActivityIndicator, FlatList, Button, StyleSheet } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsteroidDisplay from "./components/AsteroidListCard";
import useNasaApi from "./api/nasaApi";

export default function Index() {
  let currentDate = new Date().toJSON().slice(0, 10);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [date, setDate] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(false);

  const { data, isLoading } = useNasaApi(selectedDate);

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };
  const onChange = ({ type }, pickedDate) => {
    if (type == "set") {
      const currentDate = pickedDate;
      setSelectedDate(currentDate);
      setDate(currentDate)
    }else {
      toggleDatePicker();
    }
  };

  const renderItem = ({item}) => {
    return (
      <AsteroidDisplay item={item}/>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
  });

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Marianne's Asteroid App</Text>
      <Button
          title="Pick a date"
          onPress={toggleDatePicker}
          style={{ margin: 10 }}
        />
      {showDatePicker && (
      <DateTimePicker 
        mode="date"
        display="spinner"
        value={date}
        onChange={onChange}
      />
      )}
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
    </SafeAreaView>
    </SafeAreaProvider>
  );
}
