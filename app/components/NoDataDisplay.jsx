import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const NoDataDisplay = () => (
<>
<View style={styles.noDataContainer}>
<Text style={styles.noDataText}>No data for that day</Text>
<Image source={require('../../assets/images/sadAsteroidIcon.png')} resizeMode="contain" style={styles.noDataImage}/>
</View>
</>
)

const styles = StyleSheet.create({
    noDataContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    noDataText: {
        fontSize: 20,
        marginRight: 5,
    },
    noDataImage: {
        width: 50,
        height: 50,
    }
})

export default NoDataDisplay;