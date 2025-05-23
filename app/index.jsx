import React, { useState } from "react";
import { Text, View, ActivityIndicator, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsteroidDisplay from "./components/AsteroidListCard";
import NoDataDisplay from "./components/NoDataDisplay";
import AsteroidDetails from "./components/AsteroidDetails";
import useNasaApi from "./hooks/nasaApi";

export default function Index() {
  let currentDate = new Date().toJSON().slice(0, 10);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [tempDate, setTempDate] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showAsteroidDetails, setShowAsteroidDetails] = useState(false);

  const { data, isLoading, count } = useNasaApi(selectedDate);

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };
  const onChange = ({ type }, pickedDate) => {
    if (type == "set") {
      setTempDate(pickedDate);
    }
  };

  const selectDate = () => {
    setSelectedDate(tempDate.toJSON().slice(0, 10));
    toggleDatePicker();
  }

  const renderItem = ({item}) => {
      return (
        <AsteroidDisplay item={item}/>
      )
  }

  const showDetails = () => {
    setShowAsteroidDetails(!showAsteroidDetails);
  }

  return (
    <SafeAreaProvider style={styles.safeAreaContainer}>
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.titleText}>Near Earth Object Tracker aka "The Asteroid App"</Text>
      <Image source={require('../assets/images/asteroidIcon.png')} resizeMode="contain" style={{ width: 160, height: 160 }}/>
      <TouchableOpacity onPress={toggleDatePicker} style={styles.button}>
      <Text style={styles.buttonText}>Pick a date</Text>
      </TouchableOpacity> 
      
      {showDatePicker && (
        <>
      <View style={styles.datePickerContainer}>
      <DateTimePicker 
        mode="date"
        display="spinner"
        value={tempDate}
        onChange={onChange}
        style={styles.datePicker}
      />
      </View>
      <TouchableOpacity onPress={selectDate} style={styles.button}>
      <Text style={styles.buttonText}>See Asteroids</Text>
      </TouchableOpacity>
      </>
      )}

      {isLoading ? (
      <ActivityIndicator />
    ) : (
      <>
      <Text style={styles.headerText}>{count} Nearby Asteroids on {selectedDate}:</Text>
      <TouchableOpacity onPress={showDetails}>
      <Text style={styles.buttonText}>Click here to see a summary of this day's asteroids</Text>
      </TouchableOpacity>

      {showAsteroidDetails && (
        <AsteroidDetails selectedDate={selectedDate} data={data} />
      )}
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={item=> item.id}
        ListEmptyComponent={<NoDataDisplay/>}
        style={styles.flatList}
      />
      </>
    )}
    </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 30,
    margin: 5,
    textAlign: "center",
  },
  button: {
    backgroundColor: 'rgb(217,224,232)',
    color: 'rgb(3,4,5)',
    padding: 10,
    borderRadius: 50,
    margin: 10,
    maxWidth: '50%'
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  datePickerContainer: {
    backgroundColor: 'rgb(86,135,159)',
    borderRadius: 50,
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
  },
  datePicker: {
    textColor: 'black',
  },
  headerText: {
    fontSize: 25,
    marginBottom: 5,
    marginTop: 10,
    width: '100%',
  },
  flatList: {
    width: '100%',
  }
});