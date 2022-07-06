import React, {useEffect} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import { SafeAreaView } from 'react-native'
import { Divider } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const categories = [
    {
        categoryName: 'Personal Info',
        icon: 'info-circle',
    },
    {
        categoryName: 'Payment',
        icon: 'credit-card',
    },
    {
        categoryName: 'Help',
        icon: 'question-circle'
    },
    {
        categoryName: 'Privacy',
        icon: 'eye-slash',
    },
    {
        categoryName: 'Log Out',
        icon: 'user-alt-slash',
    },
]

const AccountCategories = ({isEnabled}) => {

    
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: isEnabled ? 'black' : '#f6f6f6'}}>
      {categories.map((category, index) => (
          <View key={index} style={{backgroundColor: isEnabled ? 'black' : 'white' }}>
              <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: 75,
                    marginLeft: 10,
                    marginRight: 10,
                }}
              >
                <FontAwesome5 
                    name={category.icon}
                    size={30}
                    style={{color: isEnabled ? 'green' : 'black'}}
                />
                <Text style={{fontSize: 18, marginRight: 180, color: isEnabled ? 'white' : 'black'}}>{category.categoryName}</Text>
                <FontAwesome5 
                    name='angle-right'
                    size={25}
                    style={{color: isEnabled ? 'green' : 'black'}}
                />
              </TouchableOpacity>
              <Divider width={1} />
          </View>
      ))}
    </SafeAreaView>
  )
}

export default AccountCategories
