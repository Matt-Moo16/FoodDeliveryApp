import React from 'react'
import { View, Text } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native'


export default function BottomTabs({ navigation }) {
    return (
        <View style={{
            flexDirection: 'row',
            margin: 10,
            marginHorizontal: 30, 
            justifyContent: 'space-between'
        }}>
            <Icon icon='home' text='Home' navigation={navigation} screen='Home'/>
            <Icon icon='search' text='Browse' navigation={navigation} screen='Home'/>
            <Icon icon='shopping-bag' text='Grocery' navigation={navigation} screen='Home'/>
            <Icon icon='receipt' text='Orders' navigation={navigation} screen='Home'/>
            <Icon icon='user' text='Account' navigation={navigation} screen='AccountInfo'/>
        </View>
    )
}

const Icon = ({icon, text, navigation, screen }) => (
    <TouchableOpacity onPress={() => navigation.navigate(screen)}>
        <View>
            <FontAwesome5 
                name={icon} 
                size={25} 
                style={{marginBottom: 3, alignSelf: 'center',}}
            />
            <Text>{text}</Text>
        </View>
    </TouchableOpacity>
    
)
