import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const AccountHeader = ({navigation, isEnabled}) => {
  return (
    <SafeAreaView style={{backgroundColor: isEnabled ? 'black' : '#f6f6f6' }}>
        <View
            style={{
                padding: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
                backgroundColor: isEnabled ? 'black' : 'white'
            }}
        >
            <Icon icon='home' navigation={navigation} screen='Home' isEnabled={isEnabled}/>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: isEnabled ? 'white' : 'black'}}>Account Info</Text>
            <Icon icon='user-circle' navigation={navigation} screen='AccountInfo' isEnabled={isEnabled}/>
        </View>
    </SafeAreaView>
  )
}

const Icon = ({icon, navigation, screen, isEnabled}) => (
    <TouchableOpacity onPress={() => navigation.navigate(screen)}>
        <View>
            <FontAwesome5 
                name={icon} 
                size={25} 
                style={{marginBottom: 3, alignSelf: 'center', color: isEnabled ? 'green' : 'black'}}
            />
        </View>
    </TouchableOpacity>
    
)

export default AccountHeader
