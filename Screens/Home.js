import React, {useEffect, useState} from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import {Divider} from 'react-native-elements'
import BottomTabs from '../Components/HomePage/BottomTabs';
import HeaderTabs from '../Components/HomePage/HeaderTabs';
import RestaurantItems from '../Components/HomePage/RestaurantItems';
import SearchBar from '../Components/HomePage/SearchBar';
import Categories from '../Components/HomePage/Categories';




export default function Home({navigation}) {
    const [restaurantsData, setRestaurantsData] = useState([])
    const [city, setCity] = useState('San Francisco')
    const [activeTab, setActiveTab] = useState('Delivery')

    const YELP_API_KEY = 'G31_wuS4vkALoHjB_MgsaCO85Pjf0D3dpsOwVU1ce2FQckeJPDwtKx_wdeErvHXK4d6ldyDmjFXsL9MQAW1Q7JGb8-KrUkFy1rdbFpf_ND_7hxqrmDU1u14ekpwGYnYx'
    
    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            },
        }
            return fetch(yelpUrl, apiOptions)
                .then((res) => res.json())
                .then((res) => setRestaurantsData(
                    res.businesses.filter((business) => 
                        business.transactions.includes(activeTab.toLowerCase())
                    )
                )
            )
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab])

    return (
        <SafeAreaView style={{ backgroundColor: '#eee', flex: 1,}}>
            <View style={{backgroundColor: 'white', padding: 15,}}>
                <HeaderTabs 
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <SearchBar 
                    cityHandler={setCity}
                />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantsData={restaurantsData} navigation={navigation}/>
            </ScrollView>
            <Divider width={1}/>
            <BottomTabs navigation={navigation}/>
        </SafeAreaView>
    );
}