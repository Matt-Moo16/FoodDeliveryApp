import React, {useEffect, useState} from 'react'
import AccountCategories from '../Components/AccountPage/AccountCategories'
import AccountHeader from '../Components/AccountPage/AccountHeader'
import DisplayColor from '../Components/AccountPage/DisplayColor'
import {View} from 'react-native'


const AccountInfo = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
    }

  return (
    <View style={{flex: 1, backgroundColor: isEnabled ? 'black' : '#f6f6f6'}}>
      <AccountHeader navigation={navigation} isEnabled={isEnabled} />
      <DisplayColor isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
      <AccountCategories isEnabled={isEnabled} />
    </View>
  )
}



export default AccountInfo
