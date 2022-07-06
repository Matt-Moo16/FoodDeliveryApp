import React, { useState, useEffect} from 'react'
import {View, SafeAreaView, Switch, Text} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const DisplayColor = ({isEnabled, toggleSwitch}) => {
    
  return (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: isEnabled ? 'black' : 'white',
        marginBottom: 20,
        height: 60,
    }}>
        <FontAwesome5 
            name={isEnabled ? 'sun' : 'moon'}
            size={30}
            style={{color: isEnabled ? 'green' : 'black'}}
        />
        <Text style={{fontSize: 18, marginRight: 180, color: isEnabled ? 'white' : 'black'}}>{isEnabled ? 'Light Theme' : 'Dark Theme'}</Text>
        <Switch
        trackColor={{ false: "#f6f6f6", true: "green" }}
        thumbColor="#f6f6f6"
        ios_backgroundColor="#f6f6f6"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}

export default DisplayColor

